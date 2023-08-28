import InputGroupEducation from "./InputGroupEducation";

const EducationForm = ({ setSectionName }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputGroupEducation />
      <button onClick={() => setSectionName("list")}>Cancel</button>
      <button onClick={() => setSectionName("list")}>Save</button>
    </form>
  );
};

export default EducationForm;
