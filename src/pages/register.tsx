import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { setAlert } from '../redux/actions/alert'
import { register } from '../redux/actions/auth'

const mapStateToProps = (state, props: OwnProps) => {
  return {
    alert: state.alert,
    register: register,
  }
}
const mapDispatchToProps = {
  setAlert,
  register,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = PropsFromRedux & OwnProps

function Register({ setAlert, register }: Props) {
  console.log(register)
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
      setAlert('test', 'test')
    } else {
      register({ name, email, password })
    }
  }

  return (
    <div className='flex flex-col h-full w-full items-center justify-center bg-slate-600'>
      <form
        className='flex flex-col w-full items-center justify-center gap-5 text-white bg-byz_s_2 p-6 rounded-b-3xl'
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

export default connector(Register)
