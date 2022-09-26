import React, { useState, useEffect } from 'react'
import { setAlert } from '../../store/alertSlice'
import { useAppDispatch } from '../../store/hooks'
import { register, loadUser } from '../../store/authSlice'
import Input from './Input'

const RegisterForm = () => {
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

  // useEffect(() => {
  //   dispatch(loadUser())
  // }, [dispatch])

  return (
    <div className='flex  flex-col h-80 min-h-full w-full items-center justify-center '>
      <form
        className='flex flex-col w-full items-center justify-center gap-5  p-6 rounded-3xl'
        onSubmit={e => onSubmit(e)}
      >
        <Input type='text' name='name' onChangeHandler={onChange}></Input>
        <Input name='email' type='text' onChangeHandler={e => onChange(e)} />
        <Input
          name='password'
          type='password'
          onChangeHandler={e => onChange(e)}
        />
        <Input
          name='Confirm password'
          type='password'
          onChangeHandler={e => onChange(e)}
        />
      </form>
    </div>
  )
}

export default RegisterForm
