import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { login } from '../../store/authSlice'
import Input from './Input'
import Button from '../Button'
import Logo from '../svgs/Logo'

type Props = {
  className?: string
  rounded?: boolean
}

const LoginForm = ({ className, rounded }: Props) => {
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
      className={`${className} flex flex-col bg-primary_t dark:bg-secondary_s   gap-8 h-full   px-20 py-12 ${
        rounded ? 'rounded-[3rem]' : ''
      }  overflow-hidden items-center justify-center relative `}
      onSubmit={e => onSubmit(e)}
    >
      <Logo className='  z-10' size={32} />
      <Input name='email' type='text' onChangeHandler={e => onChange(e)} />
      <Input
        name='password'
        type='password'
        onChangeHandler={e => onChange(e)}
      />{' '}
      <Button
        className='bg-amaranth px-8 py-2 text-secondary_t_2  w-1/2 rounded-3xl'
        type='submit'
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
