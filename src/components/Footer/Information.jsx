import React from 'react'
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Information = () => {
  return (
    <div className="bg-blue-800 mx-4 grid sm:grid-cols-1 sm:justify-items-start md:grid-cols-3 md:gap-2 md:justify-items-center mb-8">
      <div className="mt-4">
        <h2 className="text-orange-400 text-3xl font-josefin font-bold">Menú</h2>
        <hr />
        <ul className="text-white font-serif">
          <li className=" hover:text-gray-400">
            <Link to="/inicio">Inicio</Link>
          </li>
          <li className=" hover:text-gray-400">
            <Link to="/institucional">Institucional</Link>
          </li>
          <li className=" hover:text-gray-400">
            <Link to="/oferta">Oferta educativa</Link>
          </li>

          <li className=" hover:text-gray-400">
            <Link to="/noticias">Noticias</Link>
          </li>
          <li className=" hover:text-gray-400">
            <Link to="/faq">FAQ</Link>
          </li>

          <li className=" hover:text-gray-400">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className=" hover:text-gray-400">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-orange-400 text-3xl font-josefin font-bold">
          Seguinos en
        </h2>
        <hr />
        <ul className="text-white font-serif flex flex-col gap-3 mt-2">
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <BsFacebook className="mt-0.5" />
            <a
              href="https://www.facebook.com/profile.php?id=100057504157788&mibextid=ZbWKwL"
              target="blank"
            >
              Facebook
            </a>
          </li>

          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <BsFillEnvelopeFill className="mt-0.5" />
            <a href="mailto:esctecnica12@gmail.com" target="blank">
              Email
            </a>
          </li>
          <li className=" hover:text-gray-400 flex flex-row gap-1">
            <BsWhatsapp className="mt-0.5" />
            <a href="https://wa.me/543855881707" target="blank">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-orange-400 text-3xl font-josefin font-bold">
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
