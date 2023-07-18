import React from 'react'
import Team from './Team';

export const Authorities = () => {
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
          Autoridades y equipo docente
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          La gran familia integra esta institución.
        </p>
      </div>
      <div className="my-12">
        <p className="text-gray-600 text-md leading-6 text-justify font-sans">
          La Escuela Técnica Nº12 cuenta con un plantel docente y no docente de
          excelentísima calidad, con alta preparación pedagógica y un gran
          sentido de pertenencia y arraigo con los objetivos institucionales.
          Nos centramos en brindar educación técnica de calidad sin descuidar
          los aspectos relacionados con el buen trato y la humanidad hacia los
          alumnos y padres que conforman la comunidad educativa de nuestra
          querida institución.
        </p>
        <div className="flex justify-center my-8">
          <img
            src="/img/others/organigramaA4.png"
            className="w-11/12 h-auto"
            alt="organigrama"
          />
        </div>
        <Team />
      </div>
    </div>
  );
}
