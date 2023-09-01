import React from "react";

const BodyEducationList = ({ educations }) => {
  return (
    <React.Fragment>
      {educations.map(
        (education) =>
          education.isShow && (
            <section key={education.id} className="flex items-center p-4 gap-6">
              <div className="w-50">
                <p className="text-base font-medium">
                  {education.startDate + " / " + education.endDate}
                </p>
                <p className="text-base font-medium">{education.location}</p>
              </div>
              <div className="w-50">
                <p className="text-xl font-semibold">{education.school}</p>
                <p className="text-lg font-medium">{education.degree}</p>
              </div>
            </section>
          )
      )}
    </React.Fragment>
  );
};

export default BodyEducationList;
