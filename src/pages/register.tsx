import React, { useState, useEffect } from 'react'
import { setAlert } from '../store/alertSlice'
import { register, loadUser } from '../store/authSlice'
import { useAppDispatch } from '../store/hooks'

function Register() {
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
    <div className='flex flex-col h-full w-full items-center justify-center bg-slate-600'>
      <form
        className='flex flex-col w-full items-center justify-center gap-5 bg-byz_s_2 p-6 rounded-b-3xl'
        onSubmit={e => onSubmit(e)}
      >
        <input
          type='text'
          name='name'
          value={name}
          placeholder='name'
          onChange={e => onChange(e)}
        />
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
        <input
          type='password'
          name='password2'
          value={password2}
          placeholder='password2'
          onChange={e => onChange(e)}
        />
        <input type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register
