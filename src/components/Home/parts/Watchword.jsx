import React from 'react'

export const Watchword = () => {
  return (
    <div
      className="my-12 mx-auto max-w-7xl px-6 lg:px-8"
      data-aos="fade-down"
      data-aos-offset="10"
      data-aos-delay="10"
      data-aos-duration="300"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="border-b border-gray-300">
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
          Nuestro lema
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Valores que guían nuestra propuesta educativa.
        </p>
      </div>

      <div className="mt-8 grid gap-10 grid-cols-1 lg:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold font-roboto tracking-tight text-green-600 sm:text-3xl">
            Aprender
          </h3>
          <div className="mt-4">
            <p className="text-gray-600 text-md leading-6 text-justify font-sans">
              Implica la apropiación de un conjunto de conocimientos científicos
              de las ramas de las ciencias naturales, sociales y del área
              técnica, que permiten una formación integral y una cultura general
              para desenvolverse en una sociedad democrática.
            </p>
            <img
              src="/img/watchword/aprender.jpg"
              alt=""
              className="mt-4 rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-roboto tracking-tight text-indigo-600 sm:text-3xl">
            Trabajar
          </h3>
          <div className="mt-4">
            <p className="text-gray-600 text-md leading-6 text-justify font-sans">
              En el transcurso de la formación técnica específica del nivel
              secundario los alumnos se apropian de un conjunto de competencias
              que les permiten el manejo de máquinas y herramientas para
              desarrollar actividades prácticas propias de su campo de acción.
            </p>
            <img
              src="/img/watchword/trabajar.jpg"
              alt=""
              className="mt-4 rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-roboto tracking-tight text-sky-500 sm:text-3xl">
            Servir
          </h3>
          <div className="mt-4">
            <p className="text-gray-600 text-md leading-6 text-justify font-sans">
              Los conocimientos técnicos y científicos aquiridos deben ser
              puestos al servicio de la sociedad, promoviendo la conciencia
              ecológica y la búsqueda del bien común. Por ello, nuestra
              institución participa anualmente en proyectos de distinto índole,
              mediante los cuales los alumnos fomentan su participación social
              efectiva.
            </p>
            <img
              src="/img/watchword/servir2.jpg"
              alt=""
              className="mt-4 rounded-lg h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
