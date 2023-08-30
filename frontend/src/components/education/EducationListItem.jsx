import React from "react";
import { FaEye, FaEyeSlash, FaTrashAlt } from "react-icons/fa";

const EducationListItem = ({
  educations,
  setEducations,
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
  const handleIsShowEducation = (id) => {
    setEducations(
      educations.map((education) =>
        education.id === id
          ? { ...education, isShow: !education.isShow }
          : education
      )
    );
  };
  const handleDeleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };
  return (
    <React.Fragment>
      {educations.map((education) => (
        <div
          key={education.id}
          className="flex justify-between items-center gap-3 p-2 w-full"
        >
          <button
            onClick={() => handleEditEducation(education.id)}
            className="text-left w-full"
          >
            <h2 className="text-sm font-medium">
              {education.school + " - " + education.degree}
            </h2>
          </button>
          {education.isShow ? (
            <FaEye
              className="text-2xl cursor-pointer"
              onClick={() => handleIsShowEducation(education.id)}
            />
          ) : (
            <FaEyeSlash
              className="text-2xl cursor-pointer"
              onClick={() => handleIsShowEducation(education.id)}
            />
          )}
          <FaTrashAlt
            className="text-lg cursor-pointer"
            onClick={() => handleDeleteEducation(education.id)}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default EducationListItem;
