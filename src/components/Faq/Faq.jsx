import React, { useState } from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
const faqs = [
  {
    id: 1,
    ask: "¿Se paga algo por concurrir a la Técnica Nº12?",
    answer:
      "La educación brindada es pública y gratuita. No se cobra cuota y no hay exámen de ingreso. Solo se pide una colaboración voluntaria (no se exige un monto de dinero) en el momento de la inscripción, que queda a criterio del tutor abonarla, pero siempre y en todo caso se inscribe a los alumnos.",
  },

  {
    id: 2,
    ask: "¿Cúal es la diferencia entre la Técnica Nº12 y las démas instituciones educativas de Fernández?",
    answer:
      "La escuela tiene una orientación técnica, por lo cual la duración del secundario es de seis años, mientras que en las escuelas de orientación común es de cinco. Los alumnos concurren de lunes a viernes en el turno mañana y algunos días de la semana por la tarde. Esto les otorga mayor cantidad de horas de clase, lo cual se traduce en una mejor preparación para afrontar el mundo del trabajo y/o estudios de nivel terciario.",
  },

  {
    id: 3,
    ask: "¿Cúal es el título que obtienen los alumnos al egresar?",
    answer:
      "Los egresados obtienen el título de Maestro Mayores de Obra, el cual les permite diseñar, dirigir y ejecutar obras de construcción edilicias. Puede diseñar integralmente una vivienda y asesorar sobre construcciones.Estara preparado para continuar cualquier carrera del nivel terciario que pueda estar ligado con la construcción como por ejemplo arquitectura e ingeniería. Tambíen al recibir una formación integral podrá cursar carreras como medicina, profesorados, contaduría, etc.",
  },

  {
    id: 4,
    ask: "¿Cúal es el horario de funcionamiento?",
    answer:
      "Para el turno mañana el horario es de 7:30 hs a 12:30 hs, mientras que para el turno tarde de 14:00 hs a 18:20 hs.",
  },
  {
    id: 5,
    ask: "¿Qué cursos concurren por el turno mañana?",
    answer:
      "En en turno de la mañana concurren de 1º a 6º año, para cursar especialmente materias de formación general.",
  },

  {
    id: 6,
    ask: "¿Qué cursos concurren por el turno tarde?",
    answer:
      "En en turno tarde concurren de 1º a 6º año para cursar materias de formación específica como talleres y prácticas profesionalizantes.",
  },

  {
    id: 7,
    ask: "¿Cuántos días concurren por la tarde los cursos de 1º y 2º año?",
    answer:
      "Tanto primer y segundo año concurre dos días al taller de 14:00 hs a 17:00 hs. Suele coincidir con el día que tienen educación física.",
  },

  {
    id: 8,
    ask: "¿Es muy difícil cursar en esta escuela?",
    answer:
      "No es difícil, pero la exigencia en nuestra institución es mayor que en las escuelas de formación común. Esto se traduce a su vez en una mejor preparación del alumno.",
  },

  {
    id: 9,
    ask: "¿Qué requisitos se necesitan para la inscripción?",
    answer:
      "Los requisitos son: 1) Certificado de 7mo o constancia de finalización. 2) Ficha médica completa. 3) Fotocopia del DNI del alumno. 4) Constancia de CUIL del alumno. 6) Fotocopia de acta de nacimiento (si nacío en otra provincia debe ser legalizada). 7) Fichas de inscripción (escuela). 8) Autorización (escuela). 9) Fotocopia de DNI y CUIL del tutor. 10) Fotocopia de DNI y CUIL del padre. 11) Fotocopia de DNI y CUIl de la madre. 12) Carpeta colgante con visor",
  },

  {
    id: 10,
    ask: "Si el alumno es de otra ciudad. ¿Puede quedar en la institución para cursar por la tarde?",
    answer:
      "Nuestra institución recibe alumnos procedentes de Forres y Beltrán. Ellos suelen quedar durante el mediodía para poder cursar el taller. En la heladera de administración puden colocar su vianda y tienen disponibles utensillos para almorzar.",
  },

  {
    id: 11,
    ask: "¿El alumno puede pedir el pase a otra escuela secundaria?",
    answer:
      "Efectivamente puede pedir el pase una escuela con modalidad común mientras este cursando primer, segundo o tercer año. Una vez ingresado al cuarto año, ya no podrá cambiarse a otra institución que cuente con una carrera distinta.",
  },
];
export const Faq = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const showAnswer = (id) => {
    setId(id);
    setShow(true);
  };

  const hiddenAnswer = (id) => {
    setId(id);
    setShow(false);
  };

  const collapse = (idParam) => {
    !show ? showAnswer(idParam) : hiddenAnswer(idParam);
  }

  return (
    <div
      className="my-12 mx-auto max-w-7xl px-6 lg:px-8"
    >
      <div className="border-b border-gray-300">
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Sobre nuestra institución, modalidad, horarios,etc.
        </p>
      </div>

      <div className="my-12">
        {faqs.map((faq) => (
          <div className="my-4 p-3 bg-slate-300 rounded-md" key={faq.id}>
            <div className="flex flex-row items-center justify-between">
              <div>
                <strong
                  onClick={() => collapse(faq.id)}
                  className="cursor-pointer"
                >
                  {faq.ask}
                </strong>
                {show && id == faq.id ? (
                  <p className="mt-4">{faq.answer}</p>
                ) : (
                  ""
                )}
              </div>
              {show && id == faq.id ? (
                <BsDashLg
                  onClick={() => hiddenAnswer(faq.id)}
                  className="cursor-pointer"
                />
              ) : (
                <BsPlusLg
                  onClick={() => showAnswer(faq.id)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
