import React, { Fragment, useState, useEffect } from 'react'
import { Combobox, Transition } from '@headlessui/react'

// Icons
import { IoIosArrowForward } from 'react-icons/io'
import { MdTaskAlt, MdClose } from 'react-icons/md'

type Props = {
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  value: any
  error: string
  id: string
  label: string
  labelColor?: string
  placeholder?: string

  setFieldValue: (field: string, value: any) => void

  options: any[]
}

const HeadlessCombobox = ({
  value,
  name,
  error,
  id,
  label,
  labelColor,
  setFieldValue,
  options,
  ...props
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter(person =>
          person.value
            .toUpperCase()
            .replace(/\s+/g, '')
            .includes(query.toUpperCase().replace(/\s+/g, ''))
        )

  useEffect(() => {
    setFieldValue(name, selectedOptions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions])

  const removeLanguage = (index: number) => {
    // Remove the language from the array
    const newLanguages = [...selectedOptions]
    newLanguages.splice(index, 1)
    setSelectedOptions(newLanguages)
    // Update the values object with the new array
    setFieldValue(name, newLanguages)
  }

  return (
    <div className='flex flex-col relative gap-1  '>
      <label
        htmlFor={name}
        className={`${labelColor ? labelColor : 'text-secondary'}`}
      >
        {label}
      </label>

      <div className=' relative w-full '>
        <Combobox
          value={selectedOptions}
          onChange={setSelectedOptions}
          multiple
        >
          <div className='relative flex flex-col  '>
            <Combobox.Input
              className='bg-secondary_s rounded-lg duration-200 w-full ease-in-out  p-2'
              onChange={event => setQuery(event.target.value)}
            />
            <Combobox.Button className='absolute inset-y-12 right-0 top-0 flex items-center pr-2 '>
              <IoIosArrowForward className='rotate-90 transition-all duration-200 ease-in-out ' />
            </Combobox.Button>

            {selectedOptions.length !== 0 && (
              <div className='w-full  rounded-md  py-2 flex gap-4'>
                {selectedOptions?.map((sOption, index) => {
                  return (
                    <div
                      key={index}
                      className='bg-blue-400  flex items-center justify-between  gap-1 rounded-md'
                    >
                      <p className='px-2'>{sOption.label}</p>

                      <MdClose
                        size={16}
                        className=' text-primary bg-red-400 h-full w-full rounded-r-md px-0.5'
                        onClick={() => removeLanguage(index)}
                      />
                    </div>
                  )
                })}
              </div>
            )}

            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className='absolute bottom-full right-0   max-h-60 w-full overflow-auto rounded-md bg-red-400 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {filteredOptions.length === 0 && query !== '' ? (
                  <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                    Nothing found.
                  </div>
                ) : (
                  filteredOptions.map((option, index) => (
                    <Combobox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default  select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {option.label}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <MdTaskAlt className={'text-success'} />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  )
}

export default HeadlessCombobox
