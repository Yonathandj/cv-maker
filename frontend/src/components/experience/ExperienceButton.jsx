import React from "react";

import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExperienceButton = ({ openEduExp, setOpenEduExp }) => {
  return (
    <React.Fragment>
      <button
        className="w-full p-2 flex justify-between items-center"
        onClick={() =>
          openEduExp === "exp" ? setOpenEduExp("none") : setOpenEduExp("exp")
        }
      >
        <section className="flex justify-center items-center gap-x-4 font-semibold">
          <FaBriefcase className="text-3xl" />
          <h4 className="text-lg mt-1">Experience</h4>
        </section>
        <section>
          {openEduExp === "exp" ? <FaChevronUp /> : <FaChevronDown />}
        </section>
      </button>
    </React.Fragment>
  );
};

export default ExperienceButton;
