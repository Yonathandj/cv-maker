import React from "react";
import { FaPlusCircle } from "react-icons/fa";

import EducationListItem from "./EducationListItem";

const EducationList = ({ setSectionName }) => {
  return (
    <React.Fragment>
      <section>
        <EducationListItem />
        <button
          className="flex gap-2 items-center mt-6 mx-auto px-10 py-2 bg-slate-300 rounded-md"
          onClick={() => {
            setSectionName("form");
          }}
        >
          <FaPlusCircle />
          <h4 className="text-base font-semibold">Add</h4>
        </button>
      </section>
    </React.Fragment>
  );
};

export default EducationList;
