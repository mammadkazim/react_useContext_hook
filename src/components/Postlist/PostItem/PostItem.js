import React from 'react'


const PostItem = (props) => {
  return (
    <div className='post'>
        <h4>{props.title?props.title:props.name}</h4>
        <p>{props.body?props.body:props.email}</p>
    </div>
  )
}

export default PostItem