import React from 'react'
import Posts from '../Home/parts/Posts'
import { Calendar } from './Calendar'

export const News = () => {
  return (
      <div className='my-12'>
      <Posts />
      <Calendar/>
    </div>
  )
}
