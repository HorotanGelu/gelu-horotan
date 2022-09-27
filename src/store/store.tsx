import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import { logger } from './middleware'
import alertSlice from './alertSlice'
import authSlice from './authSlice'

// Redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Combine all reducers we need
const reducers = combineReducers({
  alerts: alertSlice,
  auth: authSlice,
})

const persistConfig = {
  key: 'root',
  storage,
}

// Create the persistedReducer that takes the config and the combined reducers
const persistedReducer = persistReducer(persistConfig, reducers)

// Export store provider
export const store = configureStore({
  // We re using the persisted reducer function here
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
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

// Export persistor provider
export const persistor = persistStore(store)
