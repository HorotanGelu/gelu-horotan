import React from 'react'
import { useAlert } from '../context/hooks/useAlert'

import Alert from './Alert'

const AlertWrapper = () => {
  const { alerts } = useAlert()

  if (alerts.length !== 0)
    return (
      <div className=' w-1/5    fixed flex flex-col gap-2 justify-center right-5 bottom-5'>
        {alerts.map(alert => {
          return (
            <Alert
              id={alert.id}
              message={alert.message}
              isSuccess={alert.isSuccess}
              key={alert.id}
            />
          )
        })}
      </div>
    )
}

export default AlertWrapper
