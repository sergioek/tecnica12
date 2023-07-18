import React from "react";
import InfromationCBT from "./InformationCBT";
import InfromationCSO from "./InformationCSO";

export const StructureMMO = () => {
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
        <h3 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-2xl">
          CICLO BÁSICO TÉCNICO
        </h3>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Ciclo obligatorio en las escuelas técnicas.
        </p>
      </div>

      <div className="mt-12">
        <p className="text-gray-600 text-md leading-6 text-justify font-sans">
          Los contenidos de enseñanza de la Formación Técnica Específica del
          Ciclo Básico de la Educación Secundaria Técnica están organizados en
          módulos que utilizarán preponderantemente la estrategia didáctica de
          taller, ya que aquí se prioriza el HACER Y EL REFLEXIONAR SOBRE LO QUE
          SE HACE (la responsabilidad del hombre y de su accionar frente a la
          sociedad y al mundo natural) y, aunque los aprendizajes resulten
          individuales, el APRENDER CON EL OTRO, constituye la clave
          motivacional, metodológica y organizacional desde donde diseñar y
          desarrollar las actividades de aprendizaje y su secuenciación
          didáctica. La Formación Técnica Específica, en el Ciclo Básico, es
          común a todas las instituciones de la Provincia de Santiago del
          Estero, independientemente de la oferta educativa que estas tengan en
          el Ciclo Superior Técnico, respetando así la movilidad de los
          estudiantes en el Ciclo mencionado. Las Instituciones organizarán
          acciones pedagógicas para vincular, durante el 3er año, los saberes y
          capacidades adquiridas por los estudiantes a lo largo de su
          trayectoria con las especialidades del Ciclo Superior Técnico que
          conforman la oferta educativa de cada escuela.
        </p>
      </div>
      <InfromationCBT />

      <div className="border-b border-gray-300">
        <h3 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-2xl">
          CICLO SUPERIOR ORIENTADO
        </h3>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Carrera Maestro Mayor de Obras.
        </p>
      </div>

      <div className="mt-12">
        <p className="text-gray-600 text-md leading-6 text-justify font-sans">
          Los contenidos de enseñanza de la formación específica de la Educación
          Técnico Profesional se organizan en módulos, y los saberes y las
          capacidades a adquirir, ordenan las actividades de docentes y de
          alumnos en espacios que obran como entornos formativos y en los que se
          deben desarrollar modelos de intervención, a través de la gestión de
          proyectos productivos y de bienes y servicios que referencien a las
          producciones tradicionales e innovadoras del área de influencia de la
          escuela. La formación específica de la Educación Técnico Profesional,
          como se establece en el párrafo anterior, se organiza a través de
          módulos, entendidos como una unidad curricular con sentido propio, que
          orienta el proceso de enseñanza, en función de las expectativas de
          logro y contenidos definidos en torno a problemas de la práctica y a
          las capacidades de desarrollo.
        </p>
      </div>
      <InfromationCSO />
    </div>
  );
};
