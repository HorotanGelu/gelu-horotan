import React, { useState, useEffect } from 'react'

// Form
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

// Motion
// import { AnimatePresence, motion, useAnimation } from 'framer-motion'

// Components
import Input from './Input'
import Button from '../Button'
import { useAuth } from '../../context/hooks/useAuth'
import InputImage from './InputImage'
import ModalWrapper from '../ModalWrapper'

// Icons
import { MdAddAPhoto } from 'react-icons/md'
import { BsPencilSquare } from 'react-icons/bs'
import Image from 'next/image'

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
  profilePicture: Yup.mixed()
    .test(
      'imageFormat',
      `Invalid image format. Please select a supported format!`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      value => {
        if (typeof value === 'string') {
          const mimeType = value.split(',')[0].split(':')[1].split(';')[0]
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(mimeType)
        } else if (typeof value === 'object') {
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
        }
      }
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    .test('imageSize', 'Image is too large', value => {
      if (typeof value === 'string') {
        const imageData = Buffer.from(value, 'base64')

        const size = imageData.length / 1000

        return size <= 2 * 1024 // 2 MB
      } else if (typeof value === 'object') {
        const size = value.size / 1000
        return size <= 2 * 1024 //@M
      }
    }),
})

const RegisterForm = ({ className, rounded }: Props) => {
  const { register } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [croppedImage, setCroppedImage] = useState(null)

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
        profilePicture: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async ({
        firstName,
        lastName,
        email,
        password,
        password2,
        profilePicture,
      }) => {
        if (password === password2) {
          await register({
            firstName,
            lastName,
            email,
            password,
            profilePicture,
          })
        }
      }}
    >
      {({
        values: {
          firstName,
          lastName,
          email,
          password,
          password2,
          profilePicture,
        },
        setFieldValue,
        setStatus,
        errors,
        handleBlur,
        handleChange,
      }) => (
        <Form className={'flex flex-col gap-8 py-4 text-primary'}>
          <div className='w-max flex flex-col gap-1 relative self-center items-center justify-center text-secondary rounded-full '>
            {croppedImage && (
              <Image
                src={croppedImage}
                alt='Profile Picture'
                width={128}
                height={128}
                className={`rounded-full `}
              />
            )}
            <Button
              type='button'
              className={`${
                croppedImage ? 'show' : 'hidden'
              } text-secondary absolute top-0 right-0`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <BsPencilSquare
                size={32}
                className='bg-primary p-1  rounded-md'
              />
            </Button>
            <Button
              type='button'
              className={` bg-primary_t text-secondary rounded-full p-12 w-32 h-32 ${
                !croppedImage ? 'show' : 'hidden'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MdAddAPhoto size={32} />

              <ModalWrapper
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Select an Image'
              >
                <Field
                  setFieldValue={setFieldValue}
                  label='Profile picture'
                  id='profilePicture'
                  name='profilePicture'
                  onBlurHandler={handleBlur}
                  type='file'
                  value={profilePicture}
                  error={errors.profilePicture}
                  as={InputImage}
                  croppedImage={croppedImage}
                  setCroppedImage={setCroppedImage}
                  setIsOpen={setIsOpen}
                  setStatus={setStatus}
                />
              </ModalWrapper>
            </Button>
            Profile picture
          </div>

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
          <div className='grid grid-cols-2 space-x-1'>
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
          </div>
          <Button
            type='submit'
            className='mb-4 w-full self-center py-2 px-4  text-primary bg-secondary_s_2 uppercase'
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
