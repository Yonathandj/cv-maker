import React from "react";

import "../../styles/InputGroupExperience.css";

const InputGroupExperience = ({ singleExperience, setSingleExperience }) => {
  return (
    <React.Fragment>
      <section>
        <label
          htmlFor="company-name"
          className="block text-gray-700 text-base font-semibold"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company-name"
          placeholder="Enter company name"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={singleExperience.companyName}
          onChange={(e) =>
            setSingleExperience({
              ...singleExperience,
              companyName: e.target.value,
            })
          }
          autoComplete="off"
        />
      </section>
      <section className="mt-4">
        <label
          htmlFor="position-title"
          className="block text-gray-700 text-base font-semibold"
        >
          Position Title
        </label>
        <input
          type="text"
          id="position-title"
          placeholder="Enter position title"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={singleExperience.positionTitle}
          onChange={(e) =>
            setSingleExperience({
              ...singleExperience,
              positionTitle: e.target.value,
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
          value={singleExperience.startDate}
          onChange={(e) =>
            setSingleExperience({
              ...singleExperience,
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
          value={singleExperience.endDate}
          onChange={(e) =>
            setSingleExperience({
              ...singleExperience,
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
          value={singleExperience.location}
          onChange={(e) =>
            setSingleExperience({
              ...singleExperience,
              location: e.target.value,
            })
          }
          autoComplete="off"
        />
      </section>
      <section className="mt-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-base font-semibold"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          cols="40"
          rows="5"
          value={singleExperience.description}
          onChange={(e) =>
            setSingleExperience({
              ...singleExperience,
              description: e.target.value,
            })
          }
        ></textarea>
      </section>
    </React.Fragment>
  );
};

export default InputGroupExperience;
