import React from 'react';
import { projects } from '../../utils/projects';
import Project from '../Project';

export default function Portfolio() {
  return (
    <div style={{ maxWidth: "-webkit-fill-available" }}>
      <h2>Projects</h2>
      <div className='d-flex flex-wrap justify-content-center'>
        {projects.map(project => <Project {...project} />)}
      </div>
    </div>
  )
}