import React, { forwardRef } from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/authSlice'

type Props = {
  children: React.ReactNode
  header?: string
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
const Dropdown = ({ children, data, header }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div className=' text-right'>
      <Menu as='div' className='relative inline-block '>
        <Menu.Button className='inline-flex w-full justify-center rounded-md items-center gap-4   bg-opacity-20  text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          {children}
        </Menu.Button>
        <Menu.Items className='absolute right-0 mt-2 w-max p-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {header && header}
          <div className='px-1 py-1 '>
            {data &&
              data.categories?.map((category, index) => {
                return (
                  <>
                    {category?.isNew && (
                      <div className='w-full border  bg-black'></div>
                    )}
                    <Menu.Item key={index}>
                      <CustomLink
                        href={category.to}
                        className={
                          ' text-primary  group flex flex-col  items-start rounded-md text-sm w-full h-max text-left p-2 ui-active:bg-amaranth_t_2 ui-active:text-secondary transition-all ease-in-out ui-active:translate-x-1 duration-200 '
                        }
                        onClick={() => {
                          dispatch(logout())
                        }}
                      >
                        {category.name}
                      </CustomLink>
                    </Menu.Item>
                  </>
                )
              })}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default Dropdown
