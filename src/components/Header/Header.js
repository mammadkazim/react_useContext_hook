import React from 'react'
import Button from '../UI/Button/Button'
const Header = (props) => {
  return (
    <header>
        <h1>title</h1>
        <div>
          <button onClick={()=>{props.changeType('users')}} >Users</button>
          <button onClick={()=>{props.changeType('posts')}} >Posts</button>
        </div>
        <Button changeTheme={props.changeTheme}/>
    </header>
  )
}

export default Header