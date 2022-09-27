import React, { forwardRef } from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/authSlice'

type Props = {
  children: React.ReactNode
  data: {
    header: {
      text: string
    }[]
    categories: {
      name: string
      isNew?: boolean
      to?: string
      action?: () => void
    }[]
  }
}

type LinkProps = {
  className?: string
  fRef?: HTMLAnchorElement
  href?: string
  children: React.ReactNode
}

const CustomLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, fRef) => {
    const { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a ref={fRef} {...rest}>
          {children}
        </a>
      </Link>
    )
  }
)

CustomLink.displayName = 'CustomLink'
const Dropdown = ({ children, data }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div className=' text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          {children}
        </Menu.Button>
        <Menu.Items className='absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <p>{data?.header?.text}</p>
          <div className='px-1 py-1 '>
            {data &&
              data.categories?.map((category, index) => {
                return (
                  <Menu.Item key={index}>
                    <CustomLink
                      href={category.to}
                      className={
                        ' text-primary group flex flex-col  items-center rounded-md text-sm w-full h-max text-left p-2 ui-active:bg-yellow-400 '
                      }
                    >
                      {category?.isNew && (
                        <div className='w-full border bg-black'></div>
                      )}
                      {category.name === 'Log out' ? (
                        <p
                          onClick={() => {
                            dispatch(logout())
                          }}
                        >
                          {category.name}
                        </p>
                      ) : (
                        <p>{category.name}</p>
                      )}
                    </CustomLink>
                  </Menu.Item>
                )
              })}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default Dropdown
