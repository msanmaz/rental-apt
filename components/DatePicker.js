import React from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { isDaySelectable } from 'lib/dates'
import { getCost } from 'lib/cost'
import { useState } from 'react'




const DatePicker = () => {
    const [from,setFrom] = useState()
    const [to,setTo] = useState()
    return (
        <>

            <div className='flex flex-col w-full mt-10'>
                <p className='text-2xl font-bold text-center my-10'>
                    Availability and prices per night
                </p>

                <div className='pt-6 flex justify-center availability-calendar'>
                    <DayPicker
                    onDayClick={handleDayClick}
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