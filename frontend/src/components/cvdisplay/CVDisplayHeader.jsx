import React from "react";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

import "../../styles/CVDisplay.css";

const CVDisplayHeader = ({ data: { name, email, phone, address } }) => {
  return (
    <React.Fragment>
      <section className="bg-sky-800 p-4">
        <h2 className="text-center text-5xl font-semibold text-slate-100">
          {name}
        </h2>
        <section className="flex justify-around items-center mt-8">
          <div className="flex gap-2 items-center text-slate-200">
            {email && <FaEnvelope />}
            <h4 className="text-sm">{email}</h4>
          </div>
          <div className="flex gap-2 items-center text-slate-200">
            {phone && <FaPhone />}
            <h4 className="text-sm">{phone}</h4>
          </div>
          <div className="flex gap-2 items-center text-slate-200">
            {address && <FaGlobe />}
            <h4 className="text-sm">{address}</h4>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default CVDisplayHeader;
