import React from 'react'

// Form
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

// Components
import Input from './Input'
import Button from '../Button'
import { useAuth } from '../../context/hooks/useAuth'

const SignupSchema = Yup.object().shape({
   oldPassword: Yup.string()
      .required()
      .min(3, 'Please enter more than 3 characters!')
      .max(10, `Please enter less than 10 characters!`),

   password: Yup.string()
      .required()
      .min(6, 'Please enter more than 6 characters!')
      .max(24, 'Please enter less than 24 characters!'),
   password2: Yup.string()
      .required()
      .min(6, 'Please enter more than 3 characters!')
      .max(24, 'Please enter less than 24 characters!'),
})

const UpdatePasswordForm = () => {
   const { user, updateProfile } = useAuth()
   const filterById = user._id

   return (
      <Formik
         validateOnBlur
         validateOnChange
         initialValues={{
            oldPassword: '',
            password: '',
            password2: '',
         }}
         validationSchema={SignupSchema}
         onSubmit={async (
            { oldPassword, password, password2 },
            { resetForm }
         ) => {
            if (password === password2) {
               const body = {
                  oldPassword,
                  password,

                  filterById,
               }
               console.log(body)
               await updateProfile(body)
               resetForm()
            }
         }}
      >
         {({
            values: { oldPassword, password, password2 },
            errors,
            handleBlur,
            handleChange,
         }) => (
            <Form className={'flex flex-col w-full gap-8 py-4'}>
               <Field
                  label='Old password '
                  id='oldPassword'
                  name='oldPassword'
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  type='input'
                  value={oldPassword}
                  error={errors.oldPassword}
                  as={Input}
                  textColor='white'
               />
               <div className='grid grid-cols-2 space-x-1'>
                  <Field
                     label='New password'
                     id='password'
                     name='password'
                     onChangeHandler={handleChange}
                     onBlurHandler={handleBlur}
                     type='input'
                     value={password}
                     error={errors.password}
                     textColor='white'
                     as={Input}
                  />
                  <Field
                     label='Retype new password'
                     id='password2'
                     name='password2'
                     onChangeHandler={handleChange}
                     onBlurHandler={handleBlur}
                     type='input'
                     value={password2}
                     textColor='white'
                     error={errors.password2}
                     as={Input}
                  />
               </div>

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

export default UpdatePasswordForm
