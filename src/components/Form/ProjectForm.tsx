import React, { useState } from 'react'
import { useAuth } from '../../context/hooks/useAuth'

// Components
import Input from './Input'
import Button from '../Button'

// Form
import { Field, Form, Formik } from 'formik'
import Select from 'react-select'
import * as Yup from 'yup'
import TextArea from './TextArea'
import { useProject } from '../../context/hooks/useProject'
import FormikSelect from './FormikSelect'
import Tabs from '../Tab'

const ProjectForm = () => {
   const [selectedIndex, setSelectedIndex] = useState(0)
   const { addProject } = useProject()

   const technologyOptions = [
      { value: 'csharp', label: 'C#' },
      { value: 'cpp', label: 'C++' },
      { value: 'go', label: 'Go' },
      { value: 'java', label: 'Java' },
      { value: 'javascript', label: 'JavaScript' },
      { value: 'php', label: 'PHP' },
      { value: 'python', label: 'Python' },
      { value: 'ruby', label: 'Ruby' },
      { value: 'swift', label: 'Swift' },
      { value: 'angular', label: 'Angular' },
      { value: 'aspnet', label: 'ASP.NET' },
      { value: 'flask', label: 'Flask' },
      { value: 'laravel', label: 'Laravel' },
      { value: 'nodejs', label: 'Node.js' },
      { value: 'rails', label: 'Rails' },
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue.js' },
      { value: 'django', label: 'Django' },
      { value: 'express', label: 'Express' },
      { value: 'nuxt', label: 'Nuxt' },
      { value: 'svelte', label: 'Svelte' },
   ]

   const tabList = ['test1', 'test2', 'test3']

   const ProjectSchema = Yup.object().shape({
      title: Yup.string()
         .min(3, 'Please enter more than 3 characters!')

         .required('This field is required!'),
      technologies: Yup.array()
         .of(
            Yup.object().shape({
               value: Yup.string(),
               label: Yup.boolean(),
            })
         )
         .required(),
   })

   return (
      <div className='h-full  flex flex-col items-center justify-center w-full '>
         <Formik
            validateOnBlur
            validateOnChange
            initialValues={{
               title: '',
               desc: '',
               startDate: '',
               endDate: '',
               technologies: [
                  {
                     value: '',
                     label: '',
                  },
               ],
            }}
            validationSchema={ProjectSchema}
            onSubmit={async ({
               title,
               desc,
               startDate,
               endDate,
               technologies,
            }) => {
               await addProject({
                  title,
                  desc,
                  startDate,
                  endDate,
                  technologies,
               })
            }}
         >
            {({
               values: { title, desc, startDate, endDate, technologies },
               errors,

               handleBlur,
               handleChange,
            }) => (
               <Form className={'flex flex-col gap-8 py-4 w-full '}>
                  <Tabs
                     list={tabList}
                     selectedIndex={selectedIndex}
                     onChange={setSelectedIndex}
                     className='text-primary'
                  >
                     <div className='w-full'>
                        {' '}
                        <Field
                           labelColor={'text-primary'}
                           label='Title'
                           id='title'
                           name='title'
                           onChangeHandler={handleChange}
                           onBlurHandler={handleBlur}
                           type='input'
                           value={title}
                           error={errors.title}
                           as={Input}
                        />
                        <Field
                           labelColor={'text-primary'}
                           label='Description'
                           id='desc'
                           name='desc'
                           onChangeHandler={handleChange}
                           onBlurHandler={handleBlur}
                           type='input'
                           value={desc}
                           error={errors.desc}
                           as={TextArea}
                        />
                        <div className='grid grid-cols-2 gap-20 space-x-1'>
                           <Field
                              labelColor={'text-primary'}
                              label='Start Date'
                              id='startDate'
                              name='startDate'
                              onChangeHandler={handleChange}
                              onBlurHandler={handleBlur}
                              type='date'
                              value={startDate}
                              error={errors.startDate}
                              as={Input}
                           />
                           <Field
                              labelColor={'text-primary'}
                              label='End Date'
                              id='endDate'
                              name='endDate'
                              onChangeHandler={handleChange}
                              onBlurHandler={handleBlur}
                              type='date'
                              value={endDate}
                              error={errors.endDate}
                              as={Input}
                           />
                        </div>
                        <Field
                           labelColor='text-primary'
                           name='technologies'
                           value={technologies}
                           id={'technologies'}
                           isMulti
                           options={technologyOptions}
                           label='Technologies'
                           onBlur={handleBlur}
                           onChange={handleChange}
                           component={FormikSelect}
                           error={errors.technologies}
                        />
                     </div>
                     <div>SECOND SHIT</div>
                     <div>TEST3</div>
                     <button
                        onClick={() =>
                           setSelectedIndex(prevState => prevState - 1)
                        }
                     >
                        BACK
                     </button>
                  </Tabs>
                  <div className='w-full bg-red-400 flex items-center justify-between'>
                     <button
                        onClick={() =>
                           setSelectedIndex(prevState => prevState - 1)
                        }
                     >
                        PREV
                     </button>
                     <button
                        onClick={() =>
                           setSelectedIndex(prevState => prevState + 1)
                        }
                     >
                        NEXT
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   )
}

export default ProjectForm
