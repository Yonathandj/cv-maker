import InputGroupExperience from "./InputGroupExperience";
import { FaBan, FaSdCard } from "react-icons/fa";

const ExperienceForm = ({
  editedId,
  experiences,
  setExperiences,
  singleExperience,
  setSingleExperience,
  setSectionName,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSectionName("list");
    singleExperience.isShow === undefined || singleExperience.isShow === null
      ? setExperiences([
          ...experiences.filter((experience) => experience.id !== editedId),
          { ...singleExperience, id: +new Date(), isShow: true },
        ])
      : setExperiences([
          ...experiences.filter((experience) => experience.id !== editedId),
          {
            ...singleExperience,
            id: +new Date(),
            isShow: singleExperience.isShow,
          },
        ]);
  };
  const handleResetForm = () => {
    setSingleExperience({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        handleResetForm();
      }}
    >
      <InputGroupExperience
        singleExperience={singleExperience}
        setSingleExperience={setSingleExperience}
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
            handleSubmit(e);
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

export default ExperienceForm;
