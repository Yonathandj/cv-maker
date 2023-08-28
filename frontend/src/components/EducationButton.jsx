import React from "react";

import { FaUserGraduate, FaChevronDown } from "react-icons/fa";

const EducationButton = () => {
  return (
    <React.Fragment>
      <button className="w-full p-2 flex justify-between items-center">
        <section className="flex justify-center items-center gap-4 text-lg font-semibold">
          <FaUserGraduate className="text-4xl" />
          <h4>Education</h4>
        </section>
        <section>
          <FaChevronDown />
        </section>
      </button>
    </React.Fragment>
  );
};

export default EducationButton;
