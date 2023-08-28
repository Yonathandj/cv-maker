import React from "react";

import "../../styles/InputGroupPersonalDetail.css";

const InputGroupPersonalDetail = ({ personalDetail, setPersonalDetail }) => {
  return (
    <React.Fragment>
      <section>
        <label
          htmlFor="name"
          className="block text-gray-700 text-base font-semibold"
        >
          Name <span className="text-sm text-gray-400">recommended</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={personalDetail.name}
          onChange={(e) =>
            setPersonalDetail({ ...personalDetail, name: e.target.value })
          }
        />
      </section>
      {/*  */}
      <section className="mt-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-base font-semibold"
        >
          Email <span className="text-sm text-gray-400">recommended</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={personalDetail.email}
          onChange={(e) =>
            setPersonalDetail({ ...personalDetail, email: e.target.value })
          }
        />
      </section>
      {/*  */}
      <section className="mt-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 text-base font-semibold"
        >
          Phone Number{" "}
          <span className="text-sm text-gray-400">
            recommended {"(country code e.g. 62)"}
          </span>
        </label>
        <input
          type="number"
          id="phone"
          placeholder="Enter your phone number"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={personalDetail.phone}
          onChange={(e) =>
            setPersonalDetail({ ...personalDetail, phone: e.target.value })
          }
        />
      </section>
      {/*  */}
      <section className="mt-4">
        <label
          htmlFor="address"
          className="block text-gray-700 text-base font-semibold"
        >
          Address <span className="text-sm text-gray-400">recommended</span>
        </label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={personalDetail.address}
          onChange={(e) =>
            setPersonalDetail({ ...personalDetail, address: e.target.value })
          }
        />
      </section>
    </React.Fragment>
  );
};

export default InputGroupPersonalDetail;
