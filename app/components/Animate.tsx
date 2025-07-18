"use client";

import { useEffect, useState } from "react";

const Animate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main
      className={`flex flex-col xs:p-5 sm:p-8 xs:gap-0 sm:gap-[10rem] h-auto transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <section
        role="heading"
        className="w-full flex justify-between h-fit xs:flex-col sm:flex-row xs:gap-[6.5rem] sm:gap-0 xs:pb-4 sm:pb-0"
      >
        <h1 className="font-bold xs:text-[1.3rem] sm:text-2xl">
          Sherwin Romano,
          <span className="block font-light text-[#ababab] tracking-tight">
            Web Developer
          </span>
        </h1>
        <h2 className="font-bold xs:text-[1.3rem] sm:text-2xl flex items-center h-fit w-fit xs:gap-1 sm:gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          Cebu, Philippines
        </h2>
      </section>
      {children}
    </main>
  );
};

export default Animate;
