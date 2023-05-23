import React from 'react'

export const Location = () => {
  return (
    <div>
    <div>
        <h2 className='text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl'>Ubicación geográfica</h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
        En el corazón de la ciudad de Fernández.
        </p>
    </div>

    <div className='my-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7050.222795513079!2d-63.888531!3d-27.92923!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1684870923795!5m2!1ses-419!2sar" width={800} height={600} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

    </div>

</div>
  )
}
