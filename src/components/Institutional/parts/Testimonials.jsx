
export const Testimonials =()=> {
  return (
    <section
      className="relative isolate overflow-hidden bg-white px-6 py-4 sm:py-4 lg:px-8 mb-24"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="/src/assets/img/logo.PNG" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold italic leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Nuestra institución nace como una propuesta educativa diferente
              dentro de la ciudad de Fernández, en la cual buscamos que nuestros
              alumnos adquieran competencias técnicas específicas, mediante las
              cuales sean capaces de desempeñarse en un campo laboral cada vez
              mas exigente.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="/img/tito.PNG"
              alt="image-rector"
            />
            <div className="mt-4 flex flex-col items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                Prof. Tito Livio Manfredi
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Rector Escuela Técnica N°12</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
