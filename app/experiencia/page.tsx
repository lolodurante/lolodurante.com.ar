import React from "react";

export default function Page() {
    return (
        <div>
            <span className="text-neutral-100 text-lg">
                Experiencia laboral
            </span>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 pt-4">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                May. 2022 Jul 2024
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                Commerce Frontend Developer en Valtech
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 my-4">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                Feb. 2021 May. 2022
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                Frontend tutor en Coderhouse
              </p>
              </div>
            <span className="text-neutral-100 text-lg">
                Educación
            </span>
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