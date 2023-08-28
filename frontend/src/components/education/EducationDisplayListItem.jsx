import React from "react";
import { FaEye } from "react-icons/fa";

const EducationDisplayListItem = () => {
  return (
    <React.Fragment>
      <button className="w-full bg-sky-800 p-2 flex justify-between items-center mt-2 text-white rounded-sm">
        <h2 className="text-base font-medium tracking-wide">
          London University
        </h2>
        <FaEye className="text-xl" />
      </button>
      <button className="w-full bg-sky-800 p-2 flex justify-between items-center mt-2 text-white rounded-sm">
        <h2 className="text-base font-medium tracking-wide">UNS University</h2>
        <FaEye className="text-xl" />
      </button>
    </React.Fragment>
  );
};

export default EducationDisplayListItem;
