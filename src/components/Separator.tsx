import React from 'react'

type Props = {
  horizontal?: boolean
}

const Separator = ({ horizontal }: Props) => {
  return (
    <div
      className={`${
        horizontal ? 'h-[3px] w-11/12' : 'w-[1px] h-full'
      } bg-secondary_s dark:bg-primary rounded-full p`}
    ></div>
  )
}

export default Separator
