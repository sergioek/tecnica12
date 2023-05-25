import React from 'react'
import { History } from './parts/History'
import { Location } from './parts/Location'
import { Authorities } from './parts/Authorities'

export const Project = () => {
  return (
    <div className='my-12 mx-auto max-w-7xl px-6 lg:px-8'>
        <History/>
        <Location />
        <Authorities/>
    </div>
  )
}
