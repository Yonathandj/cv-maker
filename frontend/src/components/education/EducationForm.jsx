import InputGroupEducation from "./InputGroupEducation";

import { FaBan, FaSdCard } from "react-icons/fa";

const EducationForm = ({
  setSectionName,
  educations,
  setEducations,
  singleEducation,
  setSingleEducation,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setEducations([...educations, singleEducation]);
  };

  const handleResetForm = () => {
    setSingleEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        handleResetForm();
      }}
    >
      <InputGroupEducation
        singleEducation={singleEducation}
        setSingleEducation={setSingleEducation}
      />
      <section className="flex gap-4 mt-4">
        <button
          type="button"
          className="py-2 px-6 bg-slate-300 rounded-md flex items-center gap-2"
          onClick={() => setSectionName("list")}
        >
          <FaBan />
          <h2 className="text-base font-semibold">Cancel</h2>
        </button>
        <button
          type="button"
          className="py-2 px-6 bg-sky-600 rounded-md flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            setSectionName("list");
            setEducations([...educations, singleEducation]);
            handleResetForm();
          }}
        >
          <FaSdCard className="text-white" />
          <h2 className="text-base font-semibold text-white">Save</h2>
        </button>
      </section>
    </form>
  );
};

export default EducationForm;
