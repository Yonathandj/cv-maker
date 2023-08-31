import { useState } from "react";

import ExperienceButton from "./ExperienceButton";
import ExperienceList from "./ExperienceList";
import ExperienceForm from "./ExperienceForm";

const Experience = ({ experiences, setExperiences }) => {
  const [open, setOpen] = useState(false);
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
      <ExperienceButton open={open} setOpen={setOpen} />
      {open && sectionName === "list" ? (
        <ExperienceList
          setEditedId={setEditedId}
          experiences={experiences}
          setExperiences={setExperiences}
          setSectionName={setSectionName}
          setSingleExperience={setSingleExperience}
        />
      ) : open && sectionName === "form" ? (
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
