import React from "react";

import { FaUserGraduate, FaChevronDown, FaChevronUp } from "react-icons/fa";

const EducationButton = ({ open, setOpen }) => {
  return (
    <React.Fragment>
      <button
        className="w-full p-2 flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <section className="flex justify-center items-center gap-x-4 font-semibold">
          <FaUserGraduate className="text-3xl" />
          <h4 className="text-lg mt-1">Education</h4>
        </section>
        <section>
          {
            open ? <FaChevronUp /> : <FaChevronDown/>
          }
        </section>
      </button>
    </React.Fragment>
  );
};

export default EducationButton;
