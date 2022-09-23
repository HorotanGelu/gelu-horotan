import { configureStore } from '@reduxjs/toolkit'
import { alert } from '../reducers/alert'
import { authReducer } from '../reducers/auth'

const store = configureStore({
  reducer: {
    alerts: alert,
    auth: authReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
