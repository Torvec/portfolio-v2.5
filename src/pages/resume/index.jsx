import resumeData from "./resumeData";
import PageHeader from "../../layout/components/PageHeader";

export default function Resume() {
  return (
    <>
      <PageHeader>Resume</PageHeader>
      {/* Professional Experience Section */}
      <section className="bg-stone-100 p-4 lg:p-10">
        <>
          {resumeData.experience.map((experience, index) => (
            <div key={index}>
              <div className="mb-2 flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-2xl">{experience.company}</h3>
                  <h4 className="text-xl">{experience.title}</h4>
                </div>
                <div className="md:text-right">
                  <p>{experience.location}</p>
                  <p>{experience.dates}</p>
                </div>
              </div>
              <ul className="mb-2 ml-8">
                {experience.accomplishments.map((description, index) => (
                  <li className="list-disc" key={index}>
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      </section>
      {/* Education and Training Section */}
      <section className="bg-stone-200 p-4 lg:p-10">
        <div className="flex flex-col gap-6 md:flex-row">
          {resumeData.education.map((education, index) => (
            <div key={index} className="md:w-1/4">
              <h3 className="text-2xl">{education.institution}</h3>
              <h4 className="text-lg">{education.program}</h4>
              <p className="mb-2">{education.dates}</p>
              <ul className="ml-6">
                {education.details.map((details, index) => (
                  <li className="list-disc" key={index}>
                    {details}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Skills and Software Section */}
      <section className="bg-orange-500 p-4 lg:p-10">
        <div className="m-auto flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">General Skills</h3>
            {resumeData.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="mb-1.5 mr-1.5 inline-block bg-orange-600 px-2.5 py-1.5 text-sm text-stone-100"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Software Proficiency</h3>
            {resumeData.software.map((software, softwareIndex) => (
              <span
                key={softwareIndex}
                className="mb-1.5 mr-1.5 inline-block bg-orange-600 px-2.5 py-1.5 text-sm text-stone-100"
              >
                {software}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">
              Programming Languages
            </h3>
            {resumeData.programming.map((programming, programmingIndex) => (
              <span
                key={programmingIndex}
                className="mb-1.5 mr-1.5 inline-block bg-orange-600 px-2.5 py-1.5 text-sm text-stone-100"
              >
                {programming}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Technician Skills</h3>
            {resumeData.technician.map((technician, technicianIndex) => (
              <span
                key={technicianIndex}
                className="mb-1.5 mr-1.5 inline-block bg-orange-600 px-2.5 py-1.5 text-sm text-stone-100"
              >
                {technician}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
