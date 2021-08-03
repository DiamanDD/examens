export const State: counterTypes =
    {
        startPos: 0,
        nameButtonIncr: "INCR",
        nameButtonReset: "RESET"
    }


export type counterTypes = {
    startPos: number
    nameButtonIncr: string
    nameButtonReset: string
}


export type StateType={
    state:counterTypes
}

