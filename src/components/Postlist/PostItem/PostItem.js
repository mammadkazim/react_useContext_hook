import React from 'react'

const PostItem = (props) => {
  return (
    <div className='post'>
        <h4>{props.title}{props.name}</h4>
        <p>{props.info}{props.email}</p>
    </div>
  )
}

export default PostItem