import React from "react";

export default function Page() {
    return (
        <div>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Experiencia laboral
            </h1>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 pt-4">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                May. 2022 Jul 2024
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                Commerce Frontend Developer, Valtech
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 my-4">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                Feb. 2021 May. 2022
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                Frontend tutor, Coderhouse
              </p>
              </div>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Educación
            </h1>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 pt-4">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                2024 - 2029
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                Licenciatura en Ciencias de la Computación, UBA
              </p>
            </div>
        </div>
    )
}