import React from 'react'
import Posts from '../Home/parts/Posts'
import { Calendar } from './Calendar'

export const News = () => {
  return (
    <div className="my-12">
      <Posts
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      />
      <Calendar />
    </div>
  );
}
