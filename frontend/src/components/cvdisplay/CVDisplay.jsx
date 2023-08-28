import CVDisplayHeader from "./CVDisplayHeader";

const CVDisplay = (props) => {
  return (
    <div className="w-[712px]">
      <CVDisplayHeader data={props} />
    </div>
  );
};

export default CVDisplay;
