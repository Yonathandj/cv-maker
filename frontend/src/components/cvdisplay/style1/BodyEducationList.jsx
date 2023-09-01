import React from "react";

const BodyEducationList = ({ educations }) => {
  return (
    <React.Fragment>
      {educations.map(
        (education) =>
          education.isShow && (
            <section key={education.id} className="flex items-center p-4">
              <div className="w-1/4">
                <p className="text-base font-medium">
                  {education.startDate + " / " + education.endDate}
                </p>
                <p className="text-base font-medium">{education.location}</p>
              </div>
              <div className="w-3/4">
                <p className="text-xl font-medium">{education.school}</p>
                <p className="text-base font-semibold">{education.degree}</p>
              </div>
            </section>
          )
      )}
    </React.Fragment>
  );
};

export default BodyEducationList;
