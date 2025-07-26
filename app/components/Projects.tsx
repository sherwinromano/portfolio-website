import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Datawise",
      descriptions: [
        "Translated the Figma design into a fully functional website with pixel-perfect accuracy.",
        "Implemented responsive design that adapts on every screens.",
        "Optimized with reusable components.",
      ],
      technologies: "Tailwind CSS + React",
      link: "https://datawise-tawny.vercel.app/",
    },
    {
      title: "Tesla Landing Page",
      descriptions: [
        "Recreated the tesla's landing page using HTML and SASS; fully responsive in all screens.",
      ],
      technologies: "HTML + SASS",
      link: "https://tesla-landing-page-clone-sand.vercel.app/",
    },
  ];

  return (
    <div
      role="projects-section"
      className="h-fit py-8 flex gap-8 border-y border-default"
    >
      <div className="flex flex-col gap-8 basis-full">
        <h1 className="font-bold">Projects</h1>
        <ul className="grid xs:grid-cols-1 sm:grid-cols-2 gap-2">
          {projects.map((project, index) => {
            return (
              <li
                className="border border-[#ababab] rounded-md flex hover:bg-white hover:text-black transition-all"
                key={index}
              >
                <Link
                  href={project.link}
                  className="w-full h-full p-4 flex flex-col justify-between gap-5"
                  target="_blank"
                >
                  <div className="flex">
                    <div className="flex flex-col gap-8">
                      <div className="flex justify-between items-center">
                        <h2 className="font-bold leading-tight text-[1.24rem]">
                          {project.title}
                        </h2>
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
                      <div className="flex text-[0.875rem]">
                        <ul className="ml-4 flex flex-col gap-1">
                          {project.descriptions.map((desc, descIndex) => (
                            <li key={descIndex} className="list-disc pl-2">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#ababab] text-[0.875rem]">
                    {project.technologies}
                  </span>
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
