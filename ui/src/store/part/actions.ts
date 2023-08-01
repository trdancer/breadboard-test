import {
    getPartRequest,
    getPartSuccess,
    getPartFailure,
} from './index'
import axios, { AxiosError } from 'axios'
import { apiUrl } from '../../constants'
import { AppDispatch } from '..'
export const getPart = (partNumber:string) => {
    return async (dispatch:AppDispatch) => {
        dispatch(getPartRequest({
            partNumber,
        }))
        try {
            const url = `${apiUrl}/parts/${partNumber}`
            const response = await axios.get(url)
            const part = response.data
            dispatch(getPartSuccess({part}))
            return
        } catch(err:any) {
            const axError:AxiosError = err
            dispatch(getPartFailure({
                error: {
                    code: axError.code,
                    message: (axError.response?.data as any).error || axError.message,
                }
            }))
        }
    }
}