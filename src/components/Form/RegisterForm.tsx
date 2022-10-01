import React, { useState } from 'react'
import { setAlert } from '../../store/alertSlice'
import { useAppDispatch } from '../../store/hooks'
import { register } from '../../store/authSlice'
import Input from './Input'
import Button from '../Button'
import Logo from '../svgs/Logo'

type Props = {
  className?: string
  rounded?: boolean
}

const RegisterForm = ({ className, rounded }: Props) => {
  // const alerts = useSelector(state => state.alerts)
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })

  const { firstName, lastName, email, password, password2 } = formData
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmit = async e => {
    e.preventDefault()
    if (password !== password2) {
      dispatch(setAlert('Registration failed.', 'Password didnt matched'))
    } else {
      dispatch(register({ firstName, lastName, email, password }))
    }
  }

  // useEffect(() => {
  //   dispatch(loadUser())
  // }, [dispatch])

  return (
    <form
      className={`${className} flex flex-col bg-primary_t dark:bg-secondary_s    gap-8 h-full   px-20 py-12 ${
        rounded ? 'rounded-[3rem]' : ''
      }  overflow-hidden items-center justify-center relative `}
      onSubmit={e => onSubmit(e)}
    >
      <Logo className='  z-10' size={32} />

      <Input
        type='text'
        name='firstName'
        label='First name'
        errorMsg={`First name must be between 3-16 characters and shouldn't include any special characters.`}
        onChangeHandler={onChange}
      ></Input>
      <Input
        type='text'
        name='lastName'
        label='Last name'
        errorMsg={`Last name must be between 3-16 characters and shouldn't include any special characters.`}
        onChangeHandler={onChange}
      ></Input>

      <Input
        name='email'
        type='text'
        label='Email'
        errorMsg={`Email should be a valid email.`}
        onChangeHandler={e => onChange(e)}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        errorMsg={`Password must be atleast anywhere between 6-24 characters and should include special characters.`}
        onChangeHandler={e => onChange(e)}
      />

      <Input
        name='password2'
        type='password'
        label='Check password'
        pattern={password}
        errorMsg={`Passwords must be the same.`}
        onChangeHandler={e => onChange(e)}
      />

      <Button
        className='bg-accent px-8 py-2   w-1/2 rounded-3xl  '
        type='submit'
      >
        Register
      </Button>
    </form>
  )
}

export default RegisterForm
