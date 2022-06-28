import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type NavState = {
  origin: string | null
  destination: string | null
  travelTimeInformation: string | null
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<string>) => {
      state.origin = action.payload
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action: PayloadAction<string>) => {
      state.travelTimeInformation = action.payload
    },
  },
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

// Selectors
export const selectOrigin = state => state.nav.origin
export const selectDestination = state => state.nav.destination
export const selectTravelTimeInformation = state => state.nav.travelTimeInformation

export default navSlice.reducer
