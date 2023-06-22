const posts = [
  {
    id: 1,
    title: "La Escuela Técnica se prepara el acto Central del 9 de Julio",
    href: "",
    description:
      "En el marco de los festejos por el 9 de Julio, dia de la Independencia Argentina, la Escuela Técnica trabaja arduamente en conjunto con la Municipalidad de Fernández para llevar a cabo el acto central a celebrarse el domingo 9 de Julio a las 9:00hs.",
    date: "22 de Junio, 2023",
    datetime: "2023-06-22",
    category: { title: "Noticias", href: "#" },
    author: {
      name: "Escuela Técnica Nº12",
      role: "Admin",
      href: "#",
      imageUrl:
        "https://www.nea.edu.ar/wp-content/uploads/2020/07/9dejulio.png",
    },
  },

  {
    id: 2,
    title:
      "El municipio de Fernández hizo entrega de ejemplares de la Constitución Nacional",
    href: "https://www.elprogresoweb.com.ar/noticia.php?noticia=19280",
    description:
      "El intendente Dr. Víctor Araujo estuvo presente en la Escuela Técnica Nº 12, donde los alumnos del tercer año realizaron la promesa de lealtad a la Constitución Nacional tal como lo prevé la ley Nº 27.505",
    date: "02 de Mayo, 2023",
    datetime: "2023-05-02",
    category: { title: "Noticias", href: "#" },
    author: {
      name: "Diario el progreso",
      role: "Admin",
      href: "#",
      imageUrl: "http://www.elprogresoweb.com.ar/thumbs_det.php?id=19280",
    },
  },

  {
    id: 3,
    title:
      "La Escuela Técnica Nº 12 inició el ciclo lectivo con un crecimiento en su matricula",
    href: "https://www.elprogresoweb.com.ar/noticia.php?noticia=18903",
    description:
      "El acto de apertura estuvo encabezado por el rector del establecimiento Prof. Tito Livio Manfredi y estuvieron presentes el Director de Deportes Comunal Prof. Nelo Iturre y representantes del Concejo deliberante.",
    date: "01 de Marzo, 2023",
    datetime: "2023-03-01",
    category: { title: "Noticias", href: "#" },
    author: {
      name: "Diario el progreso",
      role: "Admin",
      href: "#",
      imageUrl: "http://www.elprogresoweb.com.ar/thumbs_det.php?id=18903",
    },
  },

  {
    id: 4,
    title:
      "La Escuela Ténica Nº 12 realizó el acto de colación de los egresados 2022",
    href: "https://www.elprogresoweb.com.ar/noticia.php?noticia=18496",
    description:
      "Este año 33 alumnos culminaron sus estudios recibiéndose de Maestros Mayor de Obra. Participaron autoridades comunales.",
    date: "16 de Diciembre, 2022",
    datetime: "2022-12-16",
    category: { title: "Noticias", href: "#" },
    author: {
      name: "Diario el progreso",
      role: "Admin",
      href: "#",
      imageUrl: "http://www.elprogresoweb.com.ar/thumbs_det.php?id=18496",
    },
  },
];

export default function Posts() {
  return (
    <div className="bg-white py-2 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-b border-gray-300 mx-auto max-w-2xl lg:mx-0 ">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Noticias
          </h2>
          <p className="mt-1 text-lg leading-8 text-gray-600">
            Las últimas noticias acerca de nuestra institución.
          </p>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-4 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category.title}
                </p>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href} target="_blank">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-100 w-100 rounded-lg bg-gray-50"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
