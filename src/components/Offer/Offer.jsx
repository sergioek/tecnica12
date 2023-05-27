import React from 'react'
import { MMO } from './parts/MMO'
import { StructureMMO } from './parts/StructureMMO';

export const Offer = () => {
  return (
    <div className="my-12 mx-auto max-w-7xl px-6 lg:px-8">
          <MMO />
          <StructureMMO/>
    </div>
  );
}
