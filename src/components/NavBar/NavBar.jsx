import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
//import { logo } from "./../../assets/img/logo.PNG";




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {

    // Inicializar el estado con el array de objetos
    const [navigation, setNavigation] = useState([
      { name: "Inicio", href: "/", current: false },
      { name: "Institucional", href: "/institucional", current: false },
      { name: "Oferta educativa", href: "/oferta", current: false },
      { name: "Noticias", href: "/noticias", current: false },
      { name: "FAQ", href: "/faq", current: false },
      { name: "Formularios", href: "/formularios", current: false },
      { name: "Contacto", href: "/contacto", current: false },
      {
        name: "Sinide SGE",
        href: "https://sge.meducacionsantiago.gob.ar",
        current: false,
      },
    ]);

  return (
    <header>
      <Disclosure as="nav" className="bg-blue-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
              <div className="relative flex h-18 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-start">
                  <div className="flex flex-shrink-0 flex-row items-center">
                    <img
                      className="block h-14 w-auto lg:hidden pl-6"
                      src="/img/logo.PNG"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-14 w-auto lg:block"
                      src="/img/logo.PNG"
                      alt="Your Company"
                    />
                    <div className="flex flex-col mx-2">
                      <h1 className="text-white text-lg font-sans font-semibold">
                        Escuela Técnica Nº12
                      </h1>
                      <span className="text-white text-xs font-josefin">
                        "Aprender, Trabajar y Servir"
                      </span>
                    </div>
                  </div>
                  {/*Era sm:block*/}
                  <div className="hidden sm:ml-6 lg:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          to={item.href}
                          key={item.name}
                          className={({ isActive, isPending }) =>
                            isPending
                              ? ""
                              : isActive
                              ? "hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium font-oswald border-b-2 border-orange-400  text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium font-oswald"
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-red border-b-2 border-orange-400"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    <Link to={item.href} key={item.name} onClick={()=>{}}  >
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
