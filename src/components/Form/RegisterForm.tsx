import React from 'react'

// Form
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

// Components
import Input from './Input'
import Button from '../Button'
import { useAuth } from '../../context/customHooks/useAuth'

type Props = {
  className?: string
  rounded?: boolean
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Please enter more than 3 characters!')
    .max(10, `Please enter less than 10 characters!`)
    .required('This field is required!'),
  lastName: Yup.string()
    .min(3, 'Please enter more than 3 characters!')
    .max(10, `Please enter less than 10 characters!`)
    .required('This field is required!'),
  email: Yup.string()
    .email('Please enter a valid email!')
    .required('This field is required!'),
  password: Yup.string()
    .required('This field is required!')
    .min(6, 'Please enter more than 6 characters!')
    .max(24, 'Please enter less than 24 characters!'),
  password2: Yup.string()
    .required('This field is required!')
    .min(6, 'Please enter more than 3 characters!')
    .max(24, 'Please enter less than 24 characters!'),
})

const RegisterForm = ({ className, rounded }: Props) => {
  const { register } = useAuth()

  return (
    <Formik
      validateOnBlur
      validateOnChange
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async ({ firstName, lastName, email, password, password2 }) => {
        if (password === password2) {
          await register({ firstName, lastName, email, password })
        }
      }}
    >
      {({
        values: { firstName, lastName, email, password, password2 },
        errors,
        handleBlur,
        handleChange,
      }) => (
        <Form className={'flex flex-col gap-8 py-4'}>
          <div className='grid grid-cols-2 space-x-1'>
            <Field
              label='First name'
              id='firstName'
              name='firstName'
              onChangeHandler={handleChange}
              onBlurHandler={handleBlur}
              type='input'
              value={firstName}
              error={errors.firstName}
              as={Input}
            />
            <Field
              label='Last name'
              id='lastName'
              name='lastName'
              onChangeHandler={handleChange}
              onBlurHandler={handleBlur}
              type='input'
              value={lastName}
              error={errors.lastName}
              as={Input}
            />
          </div>
          <Field
            label='Email '
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
            type='input'
            value={password}
            error={errors.password}
            as={Input}
          />
          <Field
            label='Check password'
            id='password2'
            name='password2'
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            type='input'
            value={password2}
            error={errors.password2}
            as={Input}
          />

          <Button
            type='submit'
            className='mb-4 w-full self-center py-2 px-4  text-secondary bg-primary_t_2 uppercase'
            rounded
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
