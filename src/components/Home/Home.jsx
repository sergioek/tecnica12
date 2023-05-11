import React from 'react'

import { SimpleSlider } from './parts/SimpleSlider'
import Posts from './parts/Posts'
import { Watchword } from './parts/Watchword'
import { Video } from './parts/Video'


export const Home = () => {
  return (
      <div>
      <SimpleSlider />
      <Posts />
      <Video />
      <Watchword />
    </div>
  )
}
