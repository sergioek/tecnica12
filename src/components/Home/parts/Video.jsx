import React, { useState } from 'react'


export const Video = () => {
  const [play, setplay] = useState(false);


  const playVideo = () => {
    setplay(true);
  };


    return (
      <div
        className="my-12 mx-auto max-w-7xl px-6 lg:px-8"
        onMouseOver={() => {
          playVideo();
        }}
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="10"
        data-aos-delay="10"
        data-aos-duration="300"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        
        
      >
        <div className="border-b border-gray-300">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Video institucional
          </h2>
          <p className="mt-1 text-lg leading-8 text-gray-600">
            Infraestructura y equipamiento escolar de primera calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center my-6">
          <video className="w-5/6 h-auto" controls muted autoPlay={play}>
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
}
