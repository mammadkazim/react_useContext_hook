import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import Button from '../UI/Button/Button'
const Header = (props) => {
  const {setType} = useContext(UserContext)
  return (
    <header>
        <h1>title</h1>
        <div>
          <button onClick={()=>{setType('users')}} >Users</button>
          <button onClick={()=>{setType('posts')}} >Posts</button>
        </div>
        <Button />
    </header>
  )
}

export default Header