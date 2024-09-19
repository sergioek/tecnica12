import React from 'react'
import { Copyright } from './Copyright';
import { Information } from './Information';

export const Footer = () => {
  return (
    <footer className='bg-blue-800'>
      <div>
        <Information/>
        <Copyright/>
      </div>
    </footer>
  );
}
