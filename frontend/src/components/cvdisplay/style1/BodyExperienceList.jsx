import React from "react";

const BodyExperienceList = ({ experiences }) => {
  return (
    <React.Fragment>
      {experiences.map(
        (experience) =>
          experience.isShow && (
            <section key={experience.id} className="flex items-center p-4">
              <div className="w-1/4">
                <p className="text-base font-medium">
                  {experience.startDate + " / " + experience.endDate}
                </p>
                <p className="text-base font-medium">{experience.location}</p>
              </div>
              <div className="w-3/4 ml-5">
                <p className="text-xl font-medium">{experience.companyName}</p>
                <p className="text-base font-semibold">
                  {experience.positionTitle}
                </p>
                <p className="text-base font-semibold">
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
