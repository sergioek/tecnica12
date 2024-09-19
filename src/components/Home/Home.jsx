import React from 'react'

import { SimpleSlider } from './parts/SimpleSlider'
import Posts from './parts/Posts'
import { Watchword } from './parts/Watchword'
import { Video } from './parts/Video'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
