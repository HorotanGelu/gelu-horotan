import Image from 'next/image'
import React from 'react'
import { useAuth } from '../context/hooks/useAuth'

type Props = {
  size: string
}

const Avatar = ({ size }: Props) => {
  const { user } = useAuth()

  return (
    <>
      {/* <Image
        src={`/${user?.profilePicture}`}
        width={320}
        height={320}
        alt='profilePicture'
      ></Image> */}
      <div>test</div>
    </>
  )
}

export default Avatar
