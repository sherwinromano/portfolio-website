const Experience = () => {
  return (
    <div role="experience-section" className="h-fit py-8 flex flex-col gap-8">
      <h1 className="font-bold">Experience</h1>
      <div className="flex xs:flex-col sm:flex-row">
        <div className="flex flex-col gap-3 basis-full">
          <h2 className="font-bold">IT Support Intern</h2>
          <div>
            <h3 className="text-[#ababab] text-[0.938rem]">
              Argao Local Government Unit
            </h3>
            <h3 className="text-[#ababab] text-[0.938rem]">
              February 2025 - June 2025
            </h3>
            <h3 className="text-[#ababab] text-[0.938rem]">
              Argao, Cebu, Philippines
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 basis-full">
          <div className="invisible">
            <h2 className="font-bold">Duties</h2>
          </div>
          <ul className="flex flex-col gap-4 list-disc xs:ml-8 sm:ml-0">
            <li>
              Assisted in diagnosing and resolving hardware and software
              problems by working with the IT team to keep systems running
              smoothly.
            </li>
            <li>
              Provided technical support by troubleshooting software issues,
              leading to faster problem resolution and better user satisfaction.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
