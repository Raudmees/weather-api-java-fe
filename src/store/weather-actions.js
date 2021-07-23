import { weatherActions } from './weather-slice'
import axios from 'axios'

export const getAllRecordPoints = () => {
    return async (dispatch) => {
        const getData = async () => {
            const res = await axios.get('http://localhost:8080/api/weather')
            if(!res) {
                throw new Error('Cannot get record points!') 
            }
            return res.data
        }

        try {
          const weatherPoints =  await getData();
          dispatch(weatherActions.setRecordPoints(weatherPoints))
        } catch (error) {
            console.error(error)
        }
    }
}

export const removeRecordPointFromPolling = (payload) => {
        return (dispatch) => {
            try {
                dispatch(weatherActions.removeRecordPoint(payload))
            } catch (error) {
                console.error(error)
            }
        }
}