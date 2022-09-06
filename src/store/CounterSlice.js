import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userEmail: null,
}

export const counterSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload
    },
  },
})

export const { setUserEmail } = counterSlice.actions

export default counterSlice.reducer