import React from "react";
import { FaEye } from "react-icons/fa";

const EducationListItem = ({ educations, setSectionName }) => {
  return (
    <React.Fragment>
      {educations.map((education) => (
        <button
          className="w-full bg-slate-300 p-2 flex justify-between items-center mt-2 rounded-sm"
          key={education.id}
          onClick={() => setSectionName("form")}
        >
          <h2 className="text-base font-medium tracking-wide">
            {education.school}
          </h2>
          <FaEye className="text-xl" />
        </button>
      ))}
    </React.Fragment>
  );
};

export default EducationListItem;
