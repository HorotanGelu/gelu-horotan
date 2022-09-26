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
    <div className='flex h-full min-h-full w-full items-center justify-center rounded-3xl '>
      <form
        className='flex flex-col  w-full min-h-full items-center justify-center'
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
    </div>
  )
}

export default LoginForm
