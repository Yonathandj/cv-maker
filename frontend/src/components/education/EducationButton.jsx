import React from "react";

import { FaUserGraduate, FaChevronDown, FaChevronUp } from "react-icons/fa";

const EducationButton = ({ openEduExp, setOpenEduExp }) => {
  return (
    <React.Fragment>
      <button
        className="w-full p-2 flex justify-between items-center"
        onClick={() =>
          openEduExp === "edu" ? setOpenEduExp("none") : setOpenEduExp("edu")
        }
      >
        <section className="flex justify-center items-center gap-x-4 font-semibold">
          <FaUserGraduate className="text-3xl" />
          <h4 className="text-lg mt-1">Education</h4>
        </section>
        <section>
          {openEduExp === "edu" ? <FaChevronUp /> : <FaChevronDown />}
        </section>
      </button>
    </React.Fragment>
  );
};

export default EducationButton;
