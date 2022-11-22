import React from 'react';

export default function Project({ url, github, title, description }) {
  return (
    <div className='card flex m-2 p-2'>
      <h3>
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
