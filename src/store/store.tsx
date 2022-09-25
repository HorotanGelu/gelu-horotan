import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { logger } from './middleware'
import alertSlice from './alertSlice'
import authSlice from './authSlice'

const store = configureStore({
  reducer: {
    alerts: alertSlice,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// export type Action = AnyAction

export default store
