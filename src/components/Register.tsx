import React, { useState, useEffect } from 'react'
import { setAlert } from '../store/alertSlice'
import { register, loadUser } from '../store/authSlice'
import { useAppDispatch } from '../store/hooks'

const Register = () => {
  // const alerts = useSelector(state => state.alerts)
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmit = async e => {
    e.preventDefault()
    if (password !== password2) {
      dispatch(setAlert('Registration failed.', 'test'))
    } else {
      dispatch(register({ name, email, password }))
    }
  }

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div className='flex  flex-col h-80 min-h-full w-full items-center justify-center '>
      <form
        className='flex flex-col w-full items-center justify-center gap-5  p-6 rounded-b-3xl border-blue-200'
        onSubmit={e => onSubmit(e)}
      >
        <p className='pt-8'>New here ? Let&lsquo;s change that</p>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          name='name'
          value={name}
          placeholder='name'
          onChange={e => onChange(e)}
        />
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
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='password'
          name='password2'
          value={password2}
          placeholder='password2'
          onChange={e => onChange(e)}
        />
        <input
          className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          type='submit'
          value='Register'
        />
      </form>
    </div>
  )
}

export default Register
