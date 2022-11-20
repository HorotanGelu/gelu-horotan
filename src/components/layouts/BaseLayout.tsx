import React from 'react'
import AlertWrapper from '../AlertWrapper'

import Breadcrumb from '../Breadcrumb'
import Navigation from '../Navigation'

type Props = {
   children: React.ReactNode
}

const BaseLayout = ({ children }: Props) => {
   return (
      <>
         <Navigation />
         <Breadcrumb />

         <main>{children}</main>
         <AlertWrapper />
      </>
   )
}

export default BaseLayout
