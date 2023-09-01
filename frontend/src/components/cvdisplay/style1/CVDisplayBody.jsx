import BodyEducationList from "./BodyEducationList";
import BodyExperienceList from "./BodyExperienceList";

const CVDisplayBody = ({ educations, experiences }) => {
  return (
    <div className="pt-2 m-auto">
      {educations.length > 0 && (
        <section>
          <h2 className="text-center text-2xl font-semibold p-1 bg-sky-800 text-white tracking-wide">
            {educations.length > 1 ? "Educations" : "Education"}
          </h2>
          <BodyEducationList educations={educations} />
        </section>
      )}
      {experiences.length > 0 && (
        <section className="mt-2">
          <h2 className="text-center text-2xl font-semibold p-1 bg-sky-800 text-white tracking-wide">
            {experiences.length > 1 ? "Experiences" : "Experience"}
          </h2>
          <BodyExperienceList experiences={experiences} />
        </section>
      )}
    </div>
  );
};

export default CVDisplayBody;
