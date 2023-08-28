import React from "react";

import "../styles/InputGroup.css";

const InputGroup = ({
  data: { name, email, phone, address, setPersonalDetail },
}) => {
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
          value={name}
          onChange={(e) =>
            setPersonalDetail({ name: e.target.value, email, phone, address })
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
          value={email}
          onChange={(e) =>
            setPersonalDetail({ name, email: e.target.value, phone, address })
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
          <span className="text-sm text-gray-400">recommended {"(country code e.g. 62)"}</span>
        </label>
        <input
          type="number"
          id="phone"
          placeholder="Enter your phone number"
          className="shadow rounded-sm p-2 text-gray-700 focus:outline-none text-sm w-full"
          value={phone}
          onChange={(e) =>
            setPersonalDetail({ name, email, phone: e.target.value, address })
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
          value={address}
          onChange={(e) =>
            setPersonalDetail({ name, email, phone, address: e.target.value })
          }
        />
      </section>
    </React.Fragment>
  );
};

export default InputGroup;
