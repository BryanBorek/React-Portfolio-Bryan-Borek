import React from 'react';

export default function Project({ url, github, title, subtitle, description, png }) {
  return (
    <div className='card m-2' style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', maxWidth: '575px', borderRadius: "10px 10px 10px 10px" }}>
      <div style={{ display: 'block'}}>
        <h3 className='m-2 p-2 brandFont'>
          {title}
        </h3>
        <img src={png} alt={description} style={{ width: '100%', minWidth: "200px" }} />
      </div>
      <div style={{ height: "auto" }}>
      <h4 className='p-2 brandFont' style={{ minHeight: "75px" }}>
          {subtitle}
        </h4>
      </div>
      <div>
        <p className='m-0 p-2 glass' style={{ minHeight: "7em", width: '100%', minWidth: "200px" }}>
          {description}
        </p>
        <p className='m-0 d-inline-flex' style={{ overflow: "scroll" }}>
          <a className="linkBtn m-2" href={url}>Live URL</a><a className="linkBtn m-2" href={github}>Repository</a>
        </p>
      </div>
    </div>
  )
}
