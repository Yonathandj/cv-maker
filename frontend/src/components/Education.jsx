import { useState } from "react";
import EducationButton from "./EducationButton";
import EducationDisplay from "./EducationDisplay";

const Education = () => {
  const [open, setOpen] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  return (
    <div className="mt-5 bg-slate-200 p-4 rounded-md">
      <EducationButton open={open} setOpen={setOpen} />
      <EducationDisplay
        open={open}
        setOpen={setOpen}
        addEducation={addEducation}
        setAddEducation={setAddEducation}
      />
    </div>
  );
};

export default Education;
