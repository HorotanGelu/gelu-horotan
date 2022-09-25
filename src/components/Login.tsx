import React, { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { login } from '../store/authSlice'

const Login = () => {
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
    <div className='flex flex-col h-80 min-h-full w-full items-center justify-center'>
      <form
        className='flex flex-col w-full items-center justify-center border-blue-200   gap-5 p-6 rounded-b-3xl'
        onSubmit={e => onSubmit(e)}
      >
        <p className='pt-8'>Already a member ? Jump on board.</p>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={e => onChange(e)}
        />
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='password'
          name='password'
          value={password}
          placeholder='password'
          onChange={e => onChange(e)}
        />

        <input
          className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          type='submit'
          value='Login'
        />
      </form>
    </div>
  )
}

export default Login
