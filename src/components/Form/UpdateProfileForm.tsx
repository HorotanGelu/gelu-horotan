import React from 'react'

// Form
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

// Components
import Input from './Input'
import Button from '../Button'
import { useAuth } from '../../context/hooks/useAuth'

const SignupSchema = Yup.object().shape({
   firstName: Yup.string()

      .min(3, 'Please enter more than 3 characters!')
      .max(10, `Please enter less than 10 characters!`),

   lastName: Yup.string()
      .min(3, 'Please enter more than 3 characters!')
      .max(10, `Please enter less than 10 characters!`),

   email: Yup.string().email('Please enter a valid email!'),

   password: Yup.string()

      .min(6, 'Please enter more than 6 characters!')
      .max(24, 'Please enter less than 24 characters!'),
   password2: Yup.string()

      .min(6, 'Please enter more than 3 characters!')
      .max(24, 'Please enter less than 24 characters!'),
})

const UpdateProfileForm = () => {
   const { user, updateProfile } = useAuth()
   const filterById = user._id

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
         onSubmit={async ({ firstName, lastName, email }, { resetForm }) => {
            firstName = firstName.length > 0 ? firstName : user.firstName
            lastName = lastName.length > 0 ? lastName : user.lastName
            email = email.length > 0 ? email : user.email

            const body = { firstName, lastName, email, filterById }

            await updateProfile(body)
            resetForm()
         }}
      >
         {({
            values: { firstName, lastName, email },
            errors,
            handleBlur,
            handleChange,
         }) => (
            <Form className={'flex flex-col w-full gap-8 py-4 text-primary'}>
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
                     placeholder={user?.firstName}
                  />
                  <Field
                     label='Last name'
                     id='lastName'
                     name='lastName'
                     onChangeHandler={handleChange}
                     onBlurHandler={handleBlur}
                     type='input'
                     value={lastName}
                     textColor='white'
                     error={errors.lastName}
                     as={Input}
                     placeholder={user?.lastName}
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
                  textColor='dark'
                  placeholder={user?.email}
               />

               <Button
                  type='submit'
                  className='mb-4 w-full self-center py-2 px-4  text-primary bg-secondary_s_2 uppercase'
                  rounded
               >
                  save changes
               </Button>
            </Form>
         )}
      </Formik>
   )
}

export default UpdateProfileForm
