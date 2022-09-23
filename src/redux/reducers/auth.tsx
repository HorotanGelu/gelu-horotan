import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from '../actions/types'
import { useEffect } from 'react'

const initialState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
  isAuthenticated:
    typeof window !== 'undefined'
      ? localStorage.getItem('token')
        ? true
        : false
      : '',
  loading: true,
  user: null,
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      }
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      }
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      }
    default:
      return state
  }
}
