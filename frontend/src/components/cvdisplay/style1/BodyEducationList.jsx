import React from "react";

const BodyEducationList = ({ educations }) => {
  return (
    <React.Fragment>
      {educations.map(
        (education) =>
          education.isShow && (
            <section key={education.id} className="flex gap-6 items-center p-2">
              <div>
                <p className="text-base font-medium">
                  {education.startDate + " / " + education.endDate}
                </p>
                <p className="text-base font-medium">{education.location}</p>
              </div>
              <div>
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
