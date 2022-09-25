import { createSlice, Dispatch } from '@reduxjs/toolkit'
import setAuthToken from '../utils/setAuthToken'
import { setAlert } from './alertSlice'
import axios from 'axios'
import { AppThunk } from './store'

const initialState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
  isAuthenticated:
    typeof window !== 'undefined'
      ? localStorage.getItem('token')
        ? true
        : false
      : '', // or just !!localStorage.getItem('token'),
  loading: true,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoaded: (state, action) => {
      // modify the draft state and return nothing
      state.token = action.payload.token
      state.isAuthenticated = true
      state.loading = false
      state.user = action.payload
    },
    registerSuccess: (state, action) => {
      // replace the entire slice state
      localStorage.setItem('token', action.payload.token)
      state.token = action.payload.token
      state.isAuthenticated = true
      state.loading = false
      console.log('success')
    },
    registerFail: state => {
      localStorage.removeItem('token')
      state.token = null
      state.isAuthenticated = false
      state.loading = false
    },
    loginFail: state => {
      localStorage.removeItem('token')
      state.token = null
      state.isAuthenticated = false
      state.loading = false
    },
    authError: state => {
      localStorage.removeItem('token')
      state.token = null
      state.isAuthenticated = false
      state.loading = false
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true
      state.loading = false
      state.user = action.payload
    },
    logout: state => {
      localStorage.removeItem('token')
      state.token = null
      state.user = null
      state.isAuthenticated = false
      state.loading = false
    },
  },
})

const {
  userLoaded,
  registerSuccess,
  registerFail,
  authError,
  loginSuccess,
  loginFail,
} = authSlice.actions
export default authSlice.reducer

export const loadUser = () => async (dispatch: Dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth')
    dispatch(userLoaded(res.data))
  } catch (err) {
    dispatch(authError())
  }
}

export const register =
  ({ name, email, password }): AppThunk =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify({ name, email, password })
    try {
      const res = await axios.post(
        'http://localhost:5000/api/users',
        body,
        config
      )

      dispatch(registerSuccess(res.data))
      dispatch(userLoaded(res.data))
    } catch (err) {
      const errors = err.response.data.errors

      if (errors) {
        errors.forEach((error: { msg: string }) =>
          dispatch(setAlert(error.msg, 'danger'))
        )
      }

      dispatch(registerFail())
    }
  }

// Login User
export const login =
  ({ email, password }): AppThunk =>
  async dispatch => {
    const body = { email, password }

    try {
      const res = await axios.post('http://localhost:5000/api/auth', body)

      dispatch(loginSuccess(res.data))
      dispatch(userLoaded(res.data))
    } catch (err) {
      const errors = err.response.data.errors

      if (errors) {
        errors.forEach((error: { msg: string }) =>
          dispatch(setAlert(error.msg, 'danger'))
        )
      }

      dispatch(loginFail())
    }
  }
