import React, { useState } from 'react'
import { NextPage } from 'next'
import { useAppDispatch } from '../store/hooks'

const Login: NextPage = () => {
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
    // dispatch(login(email, password))
  }
  return (
    <div className='flex flex-col h-full w-full items-center justify-center bg-slate-600'>
      <form
        className='flex flex-col w-full items-center justify-center gap-5 text-white bg-byz_s_2 p-6 rounded-b-3xl'
        onSubmit={e => onSubmit(e)}
      >
        <input
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={e => onChange(e)}
        />
        <input
          type='password'
          name='password'
          value={password}
          placeholder='password'
          onChange={e => onChange(e)}
        />

        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login
