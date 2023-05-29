import React from 'react'
import { Galery } from './Galery';

export const Infrastructure = () => {
  return (
    <div>
      <div className="border-b border-gray-200">
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
          Infraestructura
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Nuestra infraestructura edilicia y tecnológica.
        </p>
      </div>

      <div className="my-12">
        <p className="text-gray-600 text-md leading-6 text-justify font-sans">
          Con un edificio escolar recientemente inagurado, la Escuela Técnica
          Nº12 cuenta con amplios y comodos espacios para albergar en ambos
          turnos a los alumnos y eventos que la institución convoque.Tambíen
          dispone de un taller equipado completamente con máquinas y
          herramientas para realizar trabajos en carpintería, electricidad,
          herrería y construcción.{" "}
        </p>
      </div>

      <Galery />

      <div className="grid grid-cols-1 justify-items-center my-6">
        <video width="60%" height="600px" controls>
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
