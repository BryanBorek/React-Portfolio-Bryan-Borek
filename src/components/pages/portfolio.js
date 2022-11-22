import React from 'react';
import { projects } from '../../utils/projects';
import Project from '../Project';

export default function Portfolio() {
  return (
    <div>
      <h2>Bryan's Work</h2>
      <div className='d-flex justify-content-center m-2'>
        {projects.map(project => <Project {...project} />)}
      </div>
    </div>
  )
}