export default {
    costs: {
        default_weekday: 30, //default week day price
        default_weekend: 50, //for Friday and Saturday nights

        custom: {
            2024: {
                2: {
                    default_weekday: 70, //for the entire month of august, weekends are 70
                    default_weekend: 170, //for the entire month of august, weekends are 70
                    24: 100,
                    25: 100,
                },
            },
        },
    },

    blocked: {
        2024: {
            4: [20, 21, 22], //block these days in March
        },
    },
    booked: {
        2024: {
            3: [17, 24, 25], //these days in March are reserved
        },
    },
}
