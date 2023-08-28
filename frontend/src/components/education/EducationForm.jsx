import InputGroupEducation from "./InputGroupEducation";

import { FaBan, FaSdCard } from "react-icons/fa";

const EducationForm = ({ setSectionName }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputGroupEducation />
      <section className="flex gap-4 mt-4">
        <button
          className="py-2 px-6 bg-slate-300 rounded-md flex items-center gap-2"
          onClick={() => setSectionName("list")}
        >
          <FaBan />
          <h2 className="text-base font-semibold">Cancel</h2>
        </button>
        <button
          className="py-2 px-6 bg-sky-600 rounded-md flex items-center gap-2"
          onClick={() => setSectionName("list")}
        >
          <FaSdCard className="text-white" />
          <h2 className="text-base font-semibold text-white">Save</h2>
        </button>
      </section>
    </form>
  );
};

export default EducationForm;
