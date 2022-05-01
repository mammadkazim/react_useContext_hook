import React, { useContext } from 'react'
import { UserContext } from '../../../UserContext';

const Button = () => {
  const {theme, setTheme} = useContext(UserContext)
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={changeThemeHandler}>change theme</button>
  )
}

export default Button