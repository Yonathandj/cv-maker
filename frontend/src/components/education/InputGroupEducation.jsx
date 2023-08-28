import React from "react";

import "../../styles/InputGroupEducation.css";

const InputGroupEducation = ({ singleEducation, setSingleEducation }) => {
  return (
    <React.Fragment>
      <section>
        <label
          htmlFor="school"
          className="block text-gray-700 text-base font-semibold"
        >
          School
        </label>
        <input
          type="text"
          id="school"
          placeholder="Enter school / university"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={singleEducation.school}
          onChange={(e) =>
            setSingleEducation({
              ...singleEducation,
              school: e.target.value,
            })
          }
          autoComplete="off"
        />
      </section>
      <section className="mt-4">
        <label
          htmlFor="degree"
          className="block text-gray-700 text-base font-semibold"
        >
          Degree
        </label>
        <input
          type="text"
          id="degree"
          placeholder="Enter degree / field of study"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={singleEducation.degree}
          onChange={(e) =>
            setSingleEducation({
              ...singleEducation,
              degree: e.target.value,
            })
          }
          autoComplete="off"
        />
      </section>
      <section className="mt-4">
        <label
          htmlFor="start-date"
          className="block text-gray-700 text-base font-semibold"
        >
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          placeholder="Enter start date"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={singleEducation.startDate}
          onChange={(e) =>
            setSingleEducation({
              ...singleEducation,
              startDate: e.target.value,
            })
          }
          autoComplete="off"
        />
      </section>
      <section className="mt-4">
        <label
          htmlFor="end-date"
          className="block text-gray-700 text-base font-semibold"
        >
          End Date
        </label>
        <input
          type="date"
          id="end-date"
          placeholder="Enter end date"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={singleEducation.endDate}
          onChange={(e) =>
            setSingleEducation({
              ...singleEducation,
              endDate: e.target.value,
            })
          }
          autoComplete="off"
        />
      </section>
      <section className="mt-4">
        <label
          htmlFor="location"
          className="block text-gray-700 text-base font-semibold"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter location"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={singleEducation.location}
          onChange={(e) =>
            setSingleEducation({
              ...singleEducation,
              location: e.target.value,
            })
          }
          autoComplete="off"
        />
      </section>
    </React.Fragment>
  );
};

export default InputGroupEducation;
