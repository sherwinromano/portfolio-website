import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Datawise",
      technologies: "Tailwind CSS & React",
      link: "https://datawise-tawny.vercel.app/",
    },
    {
      title: "Tesla Landing Page",
      technologies: "HTML & SASS",
      link: "https://tesla-landing-page-clone-sand.vercel.app/",
    },
  ];

  return (
    <div
      role="projects-section"
      className="h-fit py-[5rem] flex border-y border-default"
    >
      <div className="flex flex-col gap-8 basis-full">
        <h1 className="font-bold">Projects</h1>
        <ul className="grid xs:grid-cols-1 sm:grid-cols-2 gap-2">
          {projects.map((project, index) => {
            return (
              <li
                className="border border-[#ababab] rounded-md flex hover:bg-white hover:text-black transition-all group"
                key={index}
              >
                <Link
                  href={project.link}
                  className="w-full h-[10rem] p-4 flex flex-col justify-between gap-5"
                  target="_blank"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold leading-tight text-[1.24rem]">
                      {project.title}
                    </h2>
                    <span className="group-hover:text-black">
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
                  <div className="flex items-center gap-1.5 text-[#ababab] text-[0.875rem]">
                    <span className="text-inherit group-hover:text-black">
                      Technologies:{" "}
                    </span>
                    <span className="text-inherit group-hover:text-black">
                      {project.technologies}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
