import { people } from "./data/team-data.js";
import { useEffect, useState } from "react";
export default function Team() {
  const [limit, setLimit] = useState(12)
  const [progress, setProgress] = useState(false)

  useEffect(() => {
    setProgress(false)
  }, [limit])
  
  const upLimit = () => {
    setProgress(true)
    setTimeout(()=>{setLimit(limit+12)},1000)
  }

    const downLimit = () => {
      setProgress(true);
      setTimeout(() => {
        setLimit(12);
      }, 1000);
    };

  return (
    <div
      className="bg-white py-16 sm:py-16"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        {/* <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div> */}
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3"
        >
          {people.map(
            (person) =>
              person.id <= limit && (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={
                        person.imageUrl.length > 0
                          ? person.imageUrl
                          : "/img/user.png"
                      }
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {"Prof. " + person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="flex justify-center">
        {limit < people.length ? (
          <button
            className="w-28 h-12 bg-sky-500 mt-12 mx-6 rounded-md text-slate-50"
            onClick={() => upLimit()}
          >
            {progress ? "Cargando..." : "Mostrar más"}
          </button>
        ) : (
          <button
            className="w-32 h-12 bg-lime-400 mt-12 mx-6 rounded-md text-black"
            onClick={() => downLimit()}
          >
            {progress ? "Cargando..." : "Mostrar menos"}
          </button>
        )}
      </div>
    </div>
  );
}
