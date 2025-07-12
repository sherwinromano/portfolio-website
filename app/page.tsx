import Link from "next/link";
import Education from "./components/Education";
import Experience from "./components/Exprience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  const navlinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sherwin-jay-romano-0a9843291/",
    },
    {
      name: "Github",
      link: "https://github.com/sherwinromano",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sherwinromanus/",
    },
  ];
  return (
    <section className="w-full flex gap-[3rem]">
      <div className="sticky top-0 flex flex-col basis-[40%]">
        <div className="border-y border-default">
          <p className="px-2 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            eaque ducimus magnam explicabo voluptates eos unde suscipit, error,
            ut molestias, totam accusantium. Cumque, expedita laborum assumenda
            fugiat esse pariatur itaque!
          </p>
        </div>
        <ul className="flex flex-col">
          {navlinks.map((link, index) => {
            return (
              <li className="flex" key={index}>
                <Link
                  href={link.link}
                  className={
                    link.name !== "Instagram"
                      ? "flex items-center gap-2 p-2 text-[0.875rem] font-bold hover:bg-white hover:text-black w-full border-b border-default"
                      : "flex items-center gap-2 p-2 text-[0.875rem] font-bold hover:bg-white hover:text-black w-full"
                  }
                  target="_blank"
                >
                  {link.name}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col basis-full border-t border-default">
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sherwinjayromano@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-2xl font-bold w-fit self-center mt-[24rem] animate-bounce"
        >
          <span>🚀</span>
          <p>Connect with me</p>
        </Link>
      </div>
    </section>
  );
};

export default Home;
