import { useState } from "react";

import EducationButton from "./EducationButton";
import EducationList from "./EducationList";
import EducationForm from "./EducationForm";

const Education = ({
  educations,
  setEducations,
  openEduExp,
  setOpenEduExp,
}) => {
  const [editedId, setEditedId] = useState("");
  const [sectionName, setSectionName] = useState("list");
  const [singleEducation, setSingleEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    isShow: null,
  });

  return (
    <div className="mt-5 bg-slate-200 p-4 rounded-md">
      <EducationButton openEduExp={openEduExp} setOpenEduExp={setOpenEduExp} />
      {openEduExp === "edu" && sectionName === "list" ? (
        <EducationList
          educations={educations}
          setEducations={setEducations}
          setEditedId={setEditedId}
          setSectionName={setSectionName}
          setSingleEducation={setSingleEducation}
        />
      ) : openEduExp === "edu" && sectionName === "form" ? (
        <EducationForm
          editedId={editedId}
          educations={educations}
          setEducations={setEducations}
          singleEducation={singleEducation}
          setSingleEducation={setSingleEducation}
          setSectionName={setSectionName}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Education;
