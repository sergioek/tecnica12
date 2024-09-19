import React from 'react'

export const Calendar = () => {
  return (
    <div
      className="my-12 mx-auto max-w-7xl px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="border-b border-gray-300">
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
          Próximos eventos
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Eventos importantes que se desarrollarán en nuestra institución.
        </p>
      </div>

      <div className="my-12 flex justify-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FArgentina%2FCordoba&src=ZXNjdGVjbmljYTEyQGdtYWlsLmNvbQ&color=%23039BE5"
          style={{ border: "solid 1px #777" }}
          width={800}
          height={600}
          frameBorder={0}
          scrolling="no"
        />
      </div>
    </div>
  );
}
