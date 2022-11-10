import React from 'react'
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
      </>
   )
}

export default BaseLayout
