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
          playVideo()
        }}

      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Video institucional
          </h2>
          <p className="mt-1 text-lg leading-8 text-gray-600">
            Infraestructura y equipamiento escolar de primera calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center my-6">
          <video
            width="60%"
            height="600px"
            controls
            muted
            autoPlay={play}
          >
            <source src="/src/assets/video/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
}
