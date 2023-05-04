import React from 'react'
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsFillEnvelopeFill,
} from "react-icons/bs";
export const Information = () => {
  return (
    <div className="bg-blue-800 mx-4 grid sm:grid-cols-1 sm:justify-items-start md:grid-cols-3 md:gap-2 md:justify-items-center mb-8">
      <div className="mt-4">
        <h2 className="text-red-500 text-3xl font-josefin font-bold">Menú</h2>
        <hr />
        <ul className="text-white font-serif">
          <li className=" hover:text-gray-400">
            <a href="">Inicio</a>
          </li>
          <li className=" hover:text-gray-400">
            <a href="">Institucional</a>
          </li>
          <li className=" hover:text-gray-400">
            <a href="">Proyecto educativo</a>
          </li>
          <li className=" hover:text-gray-400">
            <a href="">Noticias</a>
          </li>
          <li className=" hover:text-gray-400">
            <a href="">Formulario</a>
          </li>
          <li className=" hover:text-gray-400">
            <a href="">Contacto</a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-red-500 text-3xl font-josefin font-bold">
          Redes sociales
        </h2>
        <hr />
        <ul className="text-white font-serif flex flex-col gap-3 mt-2">
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <BsFacebook />
            <a href="">Facebook</a>
          </li>
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <BsInstagram />
            <a href="">Instagram</a>
          </li>
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <BsFillEnvelopeFill />
            <a href="">Email</a>
          </li>
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <BsWhatsapp />
            <a href="">WhatsApp</a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-red-500 text-3xl font-josefin font-bold">
          Otros enlaces
        </h2>
        <hr />
        <ul className="text-white font-serif flex flex-col gap-3 mt-2">
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <a href="http://www.meducacionsantiago.gob.ar/" target="blank">
              Ministerio de Educación, Ciencia y Tecnología
            </a>
          </li>
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <a href="https://www.cgesantiago.gob.ar" target="blank">
              Consejo de Educación
            </a>
          </li>
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <a href="https://www.inet.edu.ar/" target="blank">
              INET
            </a>
          </li>
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <a href="http://tecnicas.meducacionsantiago.gob.ar/" target="blank">
              Entorno virtual de educación técnica
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
