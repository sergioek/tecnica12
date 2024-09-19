import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contact = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .max(30, "Nombre no debe poseer mas de 30 caracteres.")
      .min(1, "Nombre debe poseer al menos un caracter.")
      .required("*Este campo es obligatorio."),
    email: Yup.string()
      .email("El texto ingresado no tiene formato de email.")
      .required("*Este campo es obligatorio."),
    phone: Yup.string()
      .required("*Este campo es obligatorio."),
    message: Yup.string()
      .required("*Este campo es obligatorio")
      .min(5, "Debe poseer al menos 5 caracteres.")
      .max(256, "No puede exceder los 256 caracteres."),
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uq8bsr3",
        "template_ky5pewg",
        form.current,
        "UCJOrTILcEPrOcZRX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="my-12 mx-auto max-w-7xl px-6 lg:px-8"
    >
      <div className="border-b border-gray-300">
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
          Contacto
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Formulario de contacto con la institución.
        </p>
      </div>

      <div className="my-12">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
          }}
          onSubmit={(values, { resetForm }) => {
            Swal.fire({
              title: "Se envio un mensaje!",
              text: "En breve recibirá una respuesta en su correo electrónico o en su teléfono móvil.",
              icon: "success",
              confirmButtonText: "Cerrar",
            });
            setTimeout(() => {
              resetForm();
            }, 1000);
          }}
          validationSchema={schema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            isSubmitting,
            dirty,
            isValid,
          }) => (
            <form
              onSubmit={(e) => {
                handleSubmit(), sendEmail(e);
              }}
              ref={form}
            >
              <div className="flex flex-col mb-8">
                <label
                  htmlFor="name"
                  className="font-josefin font-bold text-lg"
                >
                  Nombre y apellido
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ingrese su nombre y apellido"
                  value={values.name}
                  onChange={handleChange}
                  className="h-9  border-gray-400 border rounded-md bg-white px-2 hover:border-indigo-600"
                />
                {errors.name && (
                  <p className=" text-red-500 mt-2">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col mb-8">
                <label
                  htmlFor="email"
                  className="font-josefin font-bold text-lg"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ingrese su email"
                  value={values.email}
                  onChange={handleChange}
                  className="h-9  border-gray-400 border rounded-md bg-white px-2 hover:border-indigo-600"
                />
                {errors.email && (
                  <p className=" text-red-500 mt-2">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col mb-8">
                <label
                  htmlFor="phone"
                  className="font-josefin font-bold text-lg"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Ingrese su teléfono"
                  value={values.phone}
                  onChange={handleChange}
                  className="h-9  border-gray-400 border rounded-md bg-white px-2 hover:border-indigo-600"
                />
                {errors.phone && (
                  <p className=" text-red-500 mt-2">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col mb-8">
                <label
                  htmlFor="message"
                  className="font-josefin font-bold text-lg"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Ingrese su mensaje"
                  value={values.message}
                  onChange={handleChange}
                  className="border-gray-400 border rounded-md bg-white px-2 hover:border-indigo-600"
                ></textarea>

                {errors.message && (
                  <p className=" text-red-500 mt-2">{errors.message}</p>
                )}
              </div>

              <div className="w-full flex justify-end">

                <button
                  className={
                    !isSubmitting
                      ? "bg-indigo-600 w-24 h-12 rounded-md text-white font-josefin font-bold text-lg"
                      : "bg-indigo-300 w-24 h-12 rounded-md text-white font-josefin font-bold text-lg"
                  }
                  type="submit"
                
                >
                  {!isSubmitting ? "Enviar" : "Enviando"}
                </button>

              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
