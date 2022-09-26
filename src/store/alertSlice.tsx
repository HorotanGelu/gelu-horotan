import { createSlice, nanoid, Dispatch, PayloadAction } from '@reduxjs/toolkit'

interface Alert {
  msg: string
  alertType: string
  id: string
}

type AlertState = Alert[]

const initialState: AlertState = []

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Alert>) => {
      // modify the draft state and return nothing
      state.push(action.payload)
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      // replace the entire slice state
      return state.filter(alert => alert.id !== action.payload)
    },
  },
})

const { addAlert, removeAlert } = alertSlice.actions

export default alertSlice.reducer

export const setAlert =
  (msg: string, alertType: string, timeout = 5000) =>
  (dispatch: Dispatch) => {
    const id = nanoid()
    dispatch(addAlert({ msg, alertType, id }))
    setTimeout(() => dispatch(removeAlert(id)), timeout)
  }
