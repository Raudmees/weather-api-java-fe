import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityWeather: {},
  recordPoints: [],
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCityWeather(state, action) {
      state.cityWeather = action.payload
    },
    setRecordPoints(state, action) {
      state.recordPoints = action.payload.reverse()
    },
    removeRecordPoint(state, action) {
      const id = action.payload
      state.recordPoints = state.recordPoints.filter((point) => point.id !== id)
    },
  },
})

export const weatherActions = weatherSlice.actions

export default weatherSlice
