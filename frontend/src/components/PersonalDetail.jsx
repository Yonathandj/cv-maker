import React from "react";
import InputGroup from "./InputGroup";

const PersonalDetail = (props) => {
  return (
    <React.Fragment>
      <form action="" className="p-4 bg-slate-200 w-96 rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Personal Detail
        </h2>
        <InputGroup data={props} />
      </form>
    </React.Fragment>
  );
};

export default PersonalDetail;
