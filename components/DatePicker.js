import React from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { getBookedDates } from 'lib/booking'
import { getBlockedDates, isDaySelectable, addDayToRange, getDatesBetweenDates, calcNumberOfNightsBetweenDates } from 'lib/dates'
import { getCost, calcTotalCostOfStay } from 'lib/cost'
import { useState } from 'react'




const DatePicker = () => {
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [numberOfNights, setNumberOfNights] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

    const sixMonthsFromNow = new Date()
    sixMonthsFromNow.setDate(sixMonthsFromNow.getDate() + 30 * 6)

    const handleDayClick = (day) => {
        const range = addDayToRange(day, {
            from,
            to,
        })

        if (!range.to) {
            if (!isDaySelectable(range.from)) {
                alert('This date cannot be selected')
                return
            }
            range.to = range.from
        }

        if (range.to && range.from) {
            if (!isDaySelectable(range.to)) {
                alert('The end date cannot be selected')
                return
            }
        }

        const daysInBetween = getDatesBetweenDates(range.from, range.to)

        for (const dayInBetween of daysInBetween) {
            if (!isDaySelectable(dayInBetween)) {
                alert('Some days between those 2 dates cannot be selected')
                return
            }
        }

        setFrom(range.from)
        setTo(range.to)
        setNumberOfNights(calcNumberOfNightsBetweenDates(range.from, range.to) + 1)
        setTotalCost(calcTotalCostOfStay(range.from, range.to))
    }
    return (
        <>

            <div className='flex flex-col w-full mt-10'>
                <p className='text-2xl font-bold text-center my-10'>
                    Availability and prices per night
                </p>
                <p className='text-center'>
                    {numberOfNights > 0 && `Stay for ${numberOfNights} nights`}
                </p>
                <p className='text-center mt-2'>
                    {totalCost > 0 && `Total cost: $${totalCost}`}
                </p>
                <p className='text-center'>
                    {from && to && (
                        <button
                            className='border px-2 py-1 mt-4'
                            onClick={() => {
                                setFrom(null)
                                setTo(null)
                                setNumberOfNights(0)
                                setTotalCost(0)
                            }}
                        >
                            Reset
                        </button>
                    )}
                </p>

                <div className='pt-6 flex justify-center availability-calendar'>
                    <DayPicker
                        onDayClick={handleDayClick}
                        disabled={[
                            ...getBlockedDates(),
                            ...getBookedDates(),
                            {
                                from: new Date('0000'),
                                to: yesterday,
                            },
                            {
                                from: sixMonthsFromNow,
                                to: new Date('4000'),
                            },
                        ]}
                        selected={[from, { from, to }]}
                        mode="range"
                        components={{
                            DayContent: (props) => (
                                <div
                                    className={`relative text-right ${!isDaySelectable(props.date) && 'text-gray-500'
                                        }`}
                                >
                                    <div>
                                        {props.date.getDate()}
                                    </div>
                                    {isDaySelectable(props.date) && (
                                        <div className='mt-0'>
                                            <span
                                                className={`bg-white text-xs text-black rounded-md font-bold px-1`}
                                            >
                                                ${getCost(props.date)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ),
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default DatePicker