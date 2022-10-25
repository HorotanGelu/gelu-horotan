import React from 'react'
import { useAuth } from '../../context/customHooks/useAuth'

// Components
import Input from './Input'
import Button from '../Button'

// Form
import { Field, Form, Formik } from 'formik'

type Props = {
  className?: string
  rounded?: boolean
}

const LoginForm = ({ className, rounded }: Props) => {
  const { login } = useAuth()

  return (
    <Formik
      validateOnBlur
      validateOnChange
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async ({ email, password }) => {
        await login({ email, password })
      }}
    >
      {({ values: { email, password }, errors, handleBlur, handleChange }) => (
        <Form className={'flex flex-col gap-8 py-4'}>
          <Field
            label='Email'
            id='email'
            name='email'
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            type='input'
            value={email}
            error={errors.email}
            as={Input}
          />
          <Field
            label='Password'
            id='password'
            name='password'
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            type='password'
            value={password}
            error={errors.password}
            as={Input}
          />

          <Button
            type='submit'
            className='mb-4 w-full self-center py-2 px-4  text-secondary bg-primary_t_2 uppercase'
            rounded
          >
            LOGIn
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
