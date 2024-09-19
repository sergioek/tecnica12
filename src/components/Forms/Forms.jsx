import React from 'react'

const forms = [
  {
    name: "Exámenes previos y libres",
    description: "Formulario de inscripción a exámenes",
    imageSrc: "/img/others/examen.jpeg",
    imageAlt: "Inscripcion-examenes",
    href: "https://forms.gle/B7yBcELwM6VVksDSA",
  },
];

export const Forms = () => {
  return (
    <div
      className="my-12 mx-auto max-w-7xl px-6 lg:px-8"
    >
      <div className="border-b border-gray-300">
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
          Formularios
        </h2>
        <p className="mt-1 text-lg leading-8 text-gray-600">
          Formularios para distintos trámites administrativos.
        </p>
      </div>

      <div className="my-12">
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
              <h2 className="text-2xl font-bold text-gray-900 font-josefin">
                Fomularios de google
              </h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {forms.map((form) => (
                  <div key={form.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={form.imageSrc}
                        alt={form.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={form.href} target="blank">
                        <span className="absolute inset-0" />
                        {form.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {form.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
