import React from "react";
import InputGroupPersonalDetail from "./InputGroupPersonalDetail";

const PersonalDetail = ({ personalDetail, setPersonalDetail }) => {
  return (
    <React.Fragment>
      <form action="" className="p-4 bg-slate-200 w-96 rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Personal Detail
        </h2>
        <InputGroupPersonalDetail
          personalDetail={personalDetail}
          setPersonalDetail={setPersonalDetail}
        />
      </form>
    </React.Fragment>
  );
};

export default PersonalDetail;
