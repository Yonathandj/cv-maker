import CVDisplayHeader from "./style1/CVDisplayHeader";

import "../../styles/CVDisplay.css";
import CVDisplayBody from "./style1/CVDisplayBody";

const CVDisplay = ({ personalDetail, educations, experiences }) => {
  return (
    <div className="w-[800px] bg-slate-200 p-2 shadow-xl rounded-sm" id="display">
      <CVDisplayHeader personalDetail={personalDetail} />
      <CVDisplayBody educations={educations} experiences={experiences} />
    </div>
  );
};

export default CVDisplay;
