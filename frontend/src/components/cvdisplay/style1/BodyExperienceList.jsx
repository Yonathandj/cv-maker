import React from "react";

const BodyExperienceList = ({ experiences }) => {
  return (
    <React.Fragment>
      {experiences.map(
        (experience) =>
          experience.isShow && (
            <section key={experience.id} className="flex items-start p-4">
              <div className="w-56">
                <p className="text-base font-medium">
                  {experience.startDate + " / " + experience.endDate}
                </p>
                <p className="text-base font-semibold">{experience.location}</p>
              </div>
              <div className="w-3/4 ml-2">
                <p className="text-xl font-semibold">
                  {experience.companyName}
                </p>
                <p className="text-lg font-medium">
                  {experience.positionTitle}
                </p>
                <p className="text-base font-normal">
                  {experience.description}
                </p>
              </div>
            </section>
          )
      )}
    </React.Fragment>
  );
};

export default BodyExperienceList;
