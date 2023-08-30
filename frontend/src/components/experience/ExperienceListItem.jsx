import React from "react";
import { FaEye, FaEyeSlash, FaTrashAlt } from "react-icons/fa";

const ExperienceListItem = ({
  experiences,
  setExperiences,
  setEditedId,
  setSectionName,
  setSingleExperience,
}) => {
  const handleEditExperience = (id) => {
    setSectionName("form");
    setEditedId(id);
    setSingleExperience(
      experiences.filter((experience) => experience.id === id)[0]
    );
  };
  const handleIsShowExperience = (id) => {
    setExperiences(
      experiences.map((experience) =>
        experience.id === id
          ? { ...experience, isShow: !experience.isShow }
          : experience
      )
    );
  };
  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };
  return (
    <React.Fragment>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="flex justify-between items-center gap-3 p-2 w-full"
        >
          <button
            onClick={() => handleEditExperience(experience.id)}
            className="text-left w-full"
          >
            <h2 className="text-sm font-medium">
              {experience.school + " - " + experience.degree}
            </h2>
          </button>
          {experience.isShow ? (
            <FaEye
              className="text-2xl cursor-pointer"
              onClick={() => handleIsShowExperience(experience.id)}
            />
          ) : (
            <FaEyeSlash
              className="text-2xl cursor-pointer"
              onClick={() => handleIsShowExperience(experience.id)}
            />
          )}
          <FaTrashAlt
            className="text-lg cursor-pointer"
            onClick={() => handleDeleteExperience(experience.id)}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default ExperienceListItem;
