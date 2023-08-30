import React from "react";
import { FaEye } from "react-icons/fa";

const EducationListItem = ({
  educations,
  setEditedId,
  setSectionName,
  setSingleEducation,
}) => {
  const handleEditEducation = (id) => {
    setSectionName("form");
    setEditedId(id);
    setSingleEducation(
      educations.filter((education) => education.id === id)[0]
    );
  };

  return (
    <React.Fragment>
      {educations.map((education) => (
        <button
          className="w-full bg-slate-300 p-2 flex justify-between items-center mt-2 rounded-sm"
          key={education.id}
          onClick={() => handleEditEducation(education.id)}
        >
          <h2 className="text-sm font-medium">
            {education.school + " - " + education.degree}
          </h2>
          <FaEye className="text-xl" />
        </button>
      ))}
    </React.Fragment>
  );
};

export default EducationListItem;
