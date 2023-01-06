import React from 'react'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href: string
  className?: string
}

const BreadcrumbItem = ({ children, href, ...props }: Props) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </li>
  )
}

export default BreadcrumbItem
