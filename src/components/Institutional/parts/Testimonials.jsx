
export const Testimonials =()=> {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-4 sm:py-4 lg:px-8 mb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="/src/assets/img/logo.PNG" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold italic leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Nuestra institución nace como una propuesta educativa diferente dentro de la ciudad de Fernández, en la cual buscamos que nuestros alumnos adquieran competencias técnicas específicas, mediante las cuales sean capaces de desempeñarse en un campo laboral cada vez mas exigente.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="https://scontent.fcor10-3.fna.fbcdn.net/v/t1.18169-9/13707527_489172234608234_1727830598723010340_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG_TokZ6E5XoFNcw0lzSEs7S8TF6YorimRLxMXpiiuKZG1jnwhWEDRQCZmAFPGdH_0DAdKdRMJkYXxqD88TfN63&_nc_ohc=KLx13Qx8a9MAX9WztT8&_nc_ht=scontent.fcor10-3.fna&oh=00_AfAjSIKluTtFQcmAUGOP5ffmdeurORz3H-PrBAQARvleZg&oe=64962132"
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
