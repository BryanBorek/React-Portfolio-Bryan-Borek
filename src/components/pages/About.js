import React from 'react';
import { hobbies } from '../../utils/hobbies';
import Hobby from '../Hobby';

export default function Portfolio() {
  return (
    <div style={{ maxWidth: "-webkit-fill-available" }}>
      <h2>Hobbies</h2>
      <div className='d-flex flex-wrap justify-content-center'>
        {hobbies.map(hobby => <Hobby {...hobby} />)}
      </div>
    </div>
  )
}