import React from 'react'
import useDarkMode from '../customHooks/useDarkMode'
import * as FaIcons from 'react-icons/fa'

const DarkMode = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)
  return (
    <span
      onClick={handleMode}
      className={`absolute py-5 px-2  ${
        darkTheme ? 'text-primary' : 'text-yellow-400'
      }`}
    >
      {darkTheme ? <FaIcons.FaMoon size='24' /> : <FaIcons.FaSun size='24' />}
    </span>
  )
}

export default DarkMode
