import React from 'react'
import { BsFileEarmarkPdf } from "react-icons/bs";
import estructura from "/files/ESTRUCTURA-CURRICULAR-MMO.pdf";
export const MMO = () => {
  return (
    <div
     
    >
      <div className="border-b border-gray-300">
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
          Maestro Mayor de Obras
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Sector Construcciones edilicias.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        <div className="my-12">
          <h2 className="font-bold tracking-tight text-blue-900 text-xl mb-2">
            Alcance del perfil profesional
          </h2>
          <p className="text-gray-600 text-md leading-6 text-justify font-sans">
            El Maestro Mayor de Obras está capacitado para manifestar
            conocimientos, habilidades, destrezas, valores y actitudes en
            situaciones reales de trabajo, conforme a criterios de
            profesionalidad propios de su área y de responsabilidad social al:
          </p>

          <ul className="list-disc px-8 text-gray-600 text-md leading-6 text-justify font-sans">
            <li>
              Analizar las necesidades de un cliente y elaborar el programa de
              necesidades
            </li>
            <li>
              Elaborar anteproyectos de soluciones espaciales edilicias
              constructivas y técnicas para un programa de necesidades
              determinado
            </li>
            <li>
              Proyectar soluciones espaciales edilicias, constructivas y
              técnicas para un anteproyecto determinado
            </li>
            <li>Dirigir la ejecución de procesos constructivos en genera.</li>
            <li>
              Gestionar y administrar la ejecución del proceso constructivo en
              general
            </li>
            <li>Prestar servios de evaluación técnica a terceros</li>
            <li>Asesorar técnicamente a terceros</li>
          </ul>
          <p className="text-gray-600 text-md leading-6 text-justify font-sans">
            Las capacidades que el Maestro Mayor de Obras desarrolla en el marco
            de las funciones profesionales del campo de la construcción, le
            permiten desempeñarse en los ámbitos de producción: oficinas
            técnicas, obras de construcción edilicias, empresas de productos o
            servicios relacionados con el ámbito de la construcción actuando en
            forma independiente en las áreas ocupacionales de: proyecto,
            dirección, planificación, control, gestión, administración y
            comercialización en la industria de la construcción. Actúa
            interdisciplinariamente con expertos en otras áreas, eventualmente
            involucrados en su actividad (equipamiento e instalaciones
            electromecánicas, otras especialidades de construcciones, mecánica,
            producción agropecuaria, informática, etc.). Interpreta las
            necesidades del comitente, las definiciones surgidas de los
            estamentos técnicos y jerárquicos correspondientes, gestiona sus
            actividades específicas, controla la totalidad de las actividades
            requeridas hasta su efectiva concreción, teniendo en cuenta los
            criterios de seguridad, impacto ambiental, relaciones humanas,
            calidad, productividad y costos. Según los alcances y condiciones de
            su ejercicio profesional, se responsabiliza, ante sus contratantes
            por el cumplimiento de las normas específicas y la aplicación de las
            de seguridad e higiene, además de la calidad en los servicios y
            productos prestados hasta su efectiva concreción, teniendo en cuenta
            los criterios de seguridad, impacto ambiental, relaciones humanas,
            calidad, productividad y costos.
          </p>
        </div>

        <div className="grid justify-items-center">
          <img src="/img/offer/proyecto.jpg" alt="proyecto" className="w-5/6" />
        </div>
      </div>
      <div className="mb-24 mt-2 flex justify-center lg:mt-0 lg:justify-start">
        <a href={estructura} target="_blank" rel="noopener noreferrer">
          <button className="bg-purple-600 text-slate-100 h-10 px-4 rounded-md shadow-lg shadow-slate-600 flex justify-center items-center transform transition duration-1000 hover:border-purple-600 hover:border-2 hover:bg-slate-100 hover:text-purple-600">
            <BsFileEarmarkPdf className="mx-2" />
            Estructura Curricular
          </button>
        </a>
      </div>
    </div>
  );
}
