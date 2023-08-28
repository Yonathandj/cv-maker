import React from "react";

import { FaPlus } from "react-icons/fa";

import EducationDisplayList from "./EducationDisplayList";
import EducationForm from "./EducationForm";

const EducationDisplay = ({ open, setOpen, addEducation, setAddEducation }) => {
  return (
    <React.Fragment>
      {open ? (
        <section>
          <EducationDisplayList />
          <button
            className="flex gap-2 items-center mt-6 mx-auto px-10 py-2 bg-slate-300 rounded-md"
            onClick={() => setAddEducation(!addEducation)}
          >
            <FaPlus />
            <h4 className="text-base font-semibold">Add</h4>
          </button>
        </section>
      ) : (
        ""
      )}
      {addEducation && <EducationForm setOpen={setOpen} open={open} />}
    </React.Fragment>
  );
};

export default EducationDisplay;
