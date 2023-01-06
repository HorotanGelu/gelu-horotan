import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import getCroppedImg from '../../utils/cropImage'
import Button from '../Button'

// Icons
import { BiImageAdd } from 'react-icons/bi'

type Props = {
  value: string
  type: string
  name: string
  error: string
  id: string
  labelColor?: string
  label: string
  croppedImage: string
  setCroppedImage: React.Dispatch<React.SetStateAction<string | undefined>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>
  setFieldValue: (field: string, value: any) => void
}

type Crop = {
  x: number
  y: number
  width: number
  height: number
}

const InputImage = ({
  type,
  setFieldValue,

  name,
  id,

  setCroppedImage,
  setIsOpen,

  error,
}: Props) => {
  const [dataUrl, setDataUrl] = useState('')
  const [crop, setCrop] = useState<Crop>({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  })

  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setFieldValue(name, file)
    if (!file) {
      return
    }

    const reader = new FileReader()
    reader.onload = event => {
      setDataUrl(event.target.result as string)
    }
    reader.readAsDataURL(file)
  }

  const onCropComplete = useCallback(
    (croppedArea: unknown, croppedAreaPixels: unknown) => {
      setCroppedAreaPixels(croppedAreaPixels)
    },
    []
  )

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(dataUrl, croppedAreaPixels)
      setCroppedImage(croppedImage)

      setFieldValue(name, croppedImage)
    } catch (e) {
      console.error(e)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [croppedAreaPixels])

  const onClose = useCallback(() => {
    setDataUrl(null)
  }, [])

  return (
    <div className='relative w-full h-full   flex flex-col items-center justify-center gap-4 m-10'>
      <div className='flex items-center justify-center gap-2 '>
        {(error || !dataUrl) && (
          <div className='flex flex-col items-center justify-center gap-2'>
            <Button type='button' className='bg-primary rounded-xl'>
              <label
                htmlFor={id}
                className=' w-full h-full p-14 flex flex-col items-center justify-center rounded-xl '
              >
                <BiImageAdd size={32} className='text-secondary' />

                <input
                  accept='image/jpg'
                  onChange={onInputChange}
                  name={name}
                  type={type}
                  id={id}
                  className='bg-blue-600 hidden'
                />
                <p className='text-secondary '>Upload Image</p>
              </label>
            </Button>
          </div>
        )}
      </div>
      <span className='text-red-500  flex items-center justify-center    text-center'>
        {error}
      </span>

      {dataUrl && !error && (
        <div className='relative w-[500px] h-72 my-7 mx-auto bg-primary '>
          <Cropper
            image={dataUrl}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape='round'
            showGrid={false}
            onCropChange={location =>
              setCrop(prevState => ({
                ...prevState,
                x: location.x,
                y: location.y,
              }))
            }
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            objectFit='horizontal-cover'
            restrictPosition={true}
          />
        </div>
      )}
      <p className=' text-secondary  w-full text-center'>
        {' '}
        Please upload a .jpg .jpeg or .png file!
        <br />
        The file should not exceed 2 MB!
      </p>
      {dataUrl && !error && (
        <div className='w-full  flex items-center justify-center gap-4'>
          <Button
            type='button'
            onClick={() => {
              showCroppedImage()
              setIsOpen(false)
            }}
            className='bg-red-400 rounded-md px-3 py-1'
          >
            Apply
          </Button>
          <Button
            type='button'
            onClick={onClose}
            className='bg-red-400 rounded-md px-3 py-1'
          >
            Discard
          </Button>
        </div>
      )}
    </div>
  )
}

export default InputImage
