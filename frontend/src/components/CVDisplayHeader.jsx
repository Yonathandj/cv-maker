import React from "react";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

import "../styles/CVDisplay.css";

const CVDisplayHeader = ({ data: { name, email, phone, address } }) => {
  return (
    <React.Fragment>
      <section className="bg-sky-800 p-4 w-full">
        <h2 className="text-center text-6xl font-semibold text-slate-100">
          {name}
        </h2>
        <section className="flex gap-2 justify-around items-center mt-8">
          <div className="flex gap-2 justify-center items-center text-slate-200">
            {email && <FaEnvelope />}
            <h4 className="text-base">{email}</h4>
          </div>
          <div className="flex gap-2 justify-center items-center text-slate-200">
            {phone && <FaPhone />}
            <h4 className="text-base">{phone}</h4>
          </div>
          <div className="flex gap-2 justify-center items-center text-slate-200">
            {address && <FaGlobe />}
            <h4 className="text-base">{address}</h4>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default CVDisplayHeader;
