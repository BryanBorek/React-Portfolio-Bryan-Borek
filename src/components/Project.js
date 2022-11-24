import React from 'react';

export default function Project({ url, github, title, description, png }) {
  return (
    <div className='card flex m-2 p-2'>
      <h3 style={{display: 'contents'}}>
        <img src={png} alt={description} />
        {title}
      </h3>
      <p>
        {description}
        {url}
        {github}
      </p>
    </div>
  )
}
