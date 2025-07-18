import Link from "next/link";

const Projects = () => {
  return (
    <div
      role="projects-section"
      className="h-fit py-8 flex gap-8 border-y border-default"
    >
      <div className="flex flex-col gap-8 basis-full">
        <h1 className="font-bold">Projects</h1>
        <ul className="grid xs:grid-cols-1 sm:grid-cols-2 gap-2">
          <li className="border border-[#ababab] rounded-md flex hover:bg-white hover:text-black transition-all">
            <Link
              href="https://tesla-landing-page-clone-sand.vercel.app/"
              className="w-full h-full p-4"
              target="_blank"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-bold leading-tight">Tesla Landing Page</h2>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col text-[0.875rem] mt-7 gap-3">
                <p>
                  Recreated the tesla's landing page using HTML and SASS; fully
                  responsive in all screens.
                </p>
                <span className="text-[#ababab]">HTML + SASS</span>
              </div>
            </Link>
          </li>
          <li className="border border-[#0d0d0d] rounded-md flex flex-col justify-between p-4">
            <h2 className="font-bold text-[#808080]">
              Datawise | SaaS Website
            </h2>
            <p className="invisible mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum?
            </p>
            <div className="flex items-center gap-2">
              <div className="loader"></div>
              <p className="text-[0.875rem] ">In Progress</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
