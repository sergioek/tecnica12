import React from 'react'

export const Location = () => {
  return (
    <div
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
          Ubicación geográfica
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          En el corazón de la ciudad de Fernández.
        </p>
      </div>

      <div className="my-12 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.838338867007!2d-63.89044676326627!3d-27.92970592933156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b14eca7bf50d5%3A0x181845caa7f2c0fc!2sEscuela%20Tecnica%20N%C2%B012!5e0!3m2!1ses-419!2sar!4v1684970973001!5m2!1ses-419!2sar"
          className="w-11/12 h-96"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
