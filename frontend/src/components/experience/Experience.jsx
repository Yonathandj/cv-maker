import { useState } from "react";

import ExperienceButton from "./ExperienceButton";
import ExperienceList from "./ExperienceList";
import ExperienceForm from "./ExperienceForm";

const Experience = ({
  experiences,
  setExperiences,
  openEduExp,
  setOpenEduExp,
}) => {
  const [editedId, setEditedId] = useState("");
  const [sectionName, setSectionName] = useState("list");
  const [singleExperience, setSingleExperience] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    isShow: "",
  });

  return (
    <div className="mt-5 bg-slate-200 p-4 rounded-md">
      <ExperienceButton openEduExp={openEduExp} setOpenEduExp={setOpenEduExp} />
      {openEduExp === "exp" && sectionName === "list" ? (
        <ExperienceList
          setEditedId={setEditedId}
          experiences={experiences}
          setExperiences={setExperiences}
          setSectionName={setSectionName}
          setSingleExperience={setSingleExperience}
        />
      ) : openEduExp === "exp" && sectionName === "form" ? (
        <ExperienceForm
          editedId={editedId}
          experiences={experiences}
          setExperiences={setExperiences}
          singleExperience={singleExperience}
          setSingleExperience={setSingleExperience}
          setSectionName={setSectionName}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Experience;
