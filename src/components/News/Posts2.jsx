import {posts} from "../News/newsArray";


export default function Posts() {
  return (
    <div
      className="bg-white py-2 sm:py-2"
  
    >
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
