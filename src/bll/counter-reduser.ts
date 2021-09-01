const initialState = {
    startValue: 0,
    maxValue: 5,
    configStartValue: 3,
    configMaxValue: 8
}
type initialStataAT = typeof initialState


type ActionType =
    incValueAT
    | setValueFromLocalStorageAT
    | ResetValueAT
    | settingsValuesAT
    | setTempStartValueAT
    | setTempMaxValueAT

type incValueAT = ReturnType<typeof incValueAC>
export type ResetValueAT = ReturnType<typeof ResetValueAC>
type setValueFromLocalStorageAT = ReturnType<typeof setValueFromLocalStorageAC>
type settingsValuesAT = ReturnType<typeof settingsValuesAC>
type setTempStartValueAT = ReturnType<typeof setTempStartValueAC>
type setTempMaxValueAT = ReturnType<typeof setTempMaxValueAC>

export const incValueAC = () => ({
    type: "INCREMENT_VALUE"
} as const)
export const setValueFromLocalStorageAC = (value: number) => ({
    type: "SET_VALUE_FROM_LOCAL_STORAGE",
    startValue: value
} as const)
export const ResetValueAC = () => ({
    type: "RESET_VALUE",

} as const)
export const settingsValuesAC = () => ({
    type: "SETTINGS_VALUES",


} as const)
export const setTempStartValueAC = (startValue: number) => ({
    type: "SETTINGS_TEMP_START_VALUES",
    startValue: startValue,


} as const)
export const setTempMaxValueAC = (naxValue: number) => ({
    type: "SETTINGS_TEMP_MAX_VALUES",

    maxValue: naxValue

} as const)


export const counterReducer = (state: initialStataAT = initialState, action: ActionType): initialStataAT => {
    switch (action.type) {
        case "INCREMENT_VALUE":
            return {...state, startValue: state.startValue + 1}
        case "SET_VALUE_FROM_LOCAL_STORAGE":
            return {...state, startValue: action.startValue}
        case "RESET_VALUE":
            return {...state, startValue: initialState.configStartValue}
        case "SETTINGS_VALUES":
            return {...state, startValue: initialState.configStartValue, maxValue: initialState.configMaxValue}
        case "SETTINGS_TEMP_START_VALUES":
            initialState.configStartValue = action.startValue
            return {...state, configStartValue: action.startValue}
        case "SETTINGS_TEMP_MAX_VALUES":
            initialState.configMaxValue = action.maxValue
            return {...state, configMaxValue: action.maxValue}
        default:
            return state
    }

}

