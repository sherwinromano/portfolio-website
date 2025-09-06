import Link from "next/link";

const Education = () => {
  const certificates = [
    {
      name: "HTML/CSS",
      link: "https://www.testdome.com/certificates/76a519352e5649439e5aa0c5528aa70b",
    },
    {
      name: "JavaScript",
      link: "https://www.testdome.com/certificates/7d3c83ada3b942f89660f38a749221b7",
    },
    {
      name: "TypeScript",
      link: "https://www.testdome.com/certificates/1fe16e2b56424403a0cf6b358c981f2e",
    },
    {
      name: "React",
      link: "https://www.testdome.com/certificates/6c75c04e8d69492e9de538a8e398b65a",
    },
  ];

  return (
    <div
      role="education-section"
      className="h-fit py-[5rem] flex xs:flex-col sm:flex-row xs:gap-14 sm:gap-8 border-t border-default"
    >
      <div className="flex flex-col gap-8 basis-full">
        <h1 className="font-bold">Education</h1>
        <div className="text-[0.938rem] text-[#ababab]">
          <h2 className="font-bold text-base text-white">
            Bachelor of Science in Information Technology
          </h2>
          <h3 className="xs:mt-3 sm:mt-2">Cebu Technological University</h3>
          <h3>Argao, Cebu, Philippines</h3>
        </div>
      </div>
      <div className="flex flex-col gap-8 basis-full">
        <h1 className="font-bold">Certifications</h1>
        <ul className="grid grid-cols-2 gap-2">
          {certificates.map((certificate, index) => {
            return (
              <li
                className="border border-[#ababab] rounded-md flex"
                key={index}
              >
                <Link
                  className="w-full xs:p-3 sm:p-4"
                  href={certificate.link}
                  target="_blank"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{certificate.name}</h3>
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
                  <p className="mt-4 text-[0.938rem]">TestDome</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Education;
