const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Vite",
    "Node.js",
    "Git",
  ];

  return (
    <div className="h-fit py-8 flex flex-col gap-8 border-t border-default">
      <h1 className="font-bold">Skills</h1>
      <div className="flex xs:flex-col sm:flex-row xs:gap-8 sm:gap-0">
        <div className="flex flex-col basis-full gap-4">
          <h2 className="text-[#ababab]">Technical Skills</h2>
          <ul className="list-disc xs:ml-8 sm:ml-7 grid grid-cols-2 xs:w-[80%] sm:w-2/3">
            {skills.map((skill) => {
              return (
                <li key={skill} className="text-[0.938rem]">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col basis-full gap-4">
          <h2 className="text-[#ababab]">Soft Skills</h2>
          <ul className="list-disc xs:ml-8 sm:ml-7">
            <li>Communication</li>
            <li>Collaboration & Teamwork</li>
            <li>Attention to Detail</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
