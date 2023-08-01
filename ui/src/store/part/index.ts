import { createSlice } from "@reduxjs/toolkit";
import { AggregatedPart } from "../../types";
interface PartsInitialState {
    partNumber: string | undefined,
    part: AggregatedPart | undefined,
    error: {
        code: number,
        message: string,
    } | undefined,
    loading: boolean
}
const partsInitialState:PartsInitialState = {
    partNumber: undefined,
    part: undefined,
    error: undefined,
    loading: false,
}
const partSlice = createSlice({
    name: 'part',
    initialState: partsInitialState,
    reducers: {
        getPartRequest: (state, action) => {
            state.loading = true
            state.error = undefined
            state.partNumber = action.payload.partNumber
        },
        getPartSuccess: (state, action) => {
            state.loading = false
            state.error = undefined
            state.part = action.payload.part
        },
        getPartFailure: (state, action) => {
            state.loading = false
            state.error = action.payload.error
            state.part = undefined
        }

    }
})
export const { getPartRequest, getPartSuccess, getPartFailure } = partSlice.actions
export default partSlice.reducer