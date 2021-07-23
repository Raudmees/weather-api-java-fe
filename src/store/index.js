import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './weather-slice'

const store = configureStore({
    reducer: weatherSlice.reducer
})


export default store