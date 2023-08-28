import { useState } from "react";

import EducationButton from "./EducationButton";
import EducationList from "./EducationList";
import EducationForm from "./EducationForm";

const Education = () => {
  const [open, setOpen] = useState(false);
  const [sectionName, setSectionName] = useState("list");

  return (
    <div className="mt-5 bg-slate-200 p-4 rounded-md">
      <EducationButton open={open} setOpen={setOpen} />
      {open && sectionName === "list" ? (
        <EducationList setSectionName={setSectionName} />
      ) : open && sectionName === "form" ? (
        <EducationForm setSectionName={setSectionName} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Education;
