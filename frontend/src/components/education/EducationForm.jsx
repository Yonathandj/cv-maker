import InputGroupEducation from "./InputGroupEducation";

const EducationForm = ({ open, setOpen }) => {
  setOpen(!open);
  return (
    <form>
      <InputGroupEducation />
      <button>Cancel</button>
      <button>Save</button>
    </form>
  );
};

export default EducationForm;
