import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { login } from '../../store/authSlice'
import Input from './Input'

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmit = async e => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token)
  //   }
  //   dispatch(loadUser())
  // }, [])

  return (
    <form
      className='flex flex-col bg-secondary_s_2  h-96 p-20 rounded-3xl gap-16 overflow-hidden items-center justify-center'
      onSubmit={e => onSubmit(e)}
    >
      <Input name='email' type='text' onChangeHandler={e => onChange(e)} />
      <Input
        name='password'
        type='password'
        onChangeHandler={e => onChange(e)}
      />{' '}
      <input type='submit' className='btn btn-primary' value='Login' />
    </form>
  )
}

export default LoginForm
