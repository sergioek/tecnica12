import React from 'react'
import { History } from './parts/History'
import { Location } from './parts/Location'
import { Authorities } from './parts/Authorities'
import { Infrastructure } from './parts/Infrastructure'
import {Testimonials} from './parts/Testimonials'

export const Institutional = () => {
  return (
    <div className="my-12 mx-auto max-w-7xl px-6 lg:px-8">
      <History />
      <Testimonials />
      <Location />
      <Authorities />
      <Infrastructure />
    </div>
  );
}
