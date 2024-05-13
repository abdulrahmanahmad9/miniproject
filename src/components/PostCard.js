import React from 'react'

export const PostCard = ({image,title,description,likes}) => {
  return (
    <div className='card'>
        
        <img    className="post-card-image" src={image}/>
        <h3> {title}</h3>
        <p> {description}</p>
        <h5>{likes}</h5>
        <button> like </button>

    </div>
  )
}

export default PostCard;