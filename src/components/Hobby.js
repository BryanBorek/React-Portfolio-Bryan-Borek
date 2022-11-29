import React from 'react';

export default function Hobby({ title, subtitle, description, png }) {
  return (
    <div className='card m-2' style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', maxWidth: '575px', borderRadius: "10px 10px 10px 10px" }}>
      <div style={{ display: 'block'}}>
        <h3 className='m-2 p-2'>
          {title}
        </h3>
        <img src={png} alt={description} style={{ width: '100%', minWidth: "200px" }} />
      </div>
      <div>
      <h4 className='p-2'>
          {subtitle}
        </h4>
      </div>
      <div>
        <p className='m-0 p-2 glass' style={{ minHeight: "3em", width: '100%', minWidth: "200px" }}>
          {description}
        </p>
        <div style={{ minHeight: "1em"}}></div>
      </div>
    </div>
  )
}
