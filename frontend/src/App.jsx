import { useState } from "react";

import PersonalDetail from "./components/personaldetail/PersonalDetail";
import Education from "./components/education/Education";
import CVDisplay from "./components/cvdisplay/CVDisplay";

function App() {
  const [personalDetail, setPersonalDetail] = useState({
    name: "Schevenko Tendean",
    email: "schete12@gmail.com",
    phone: 62123456789,
    address: "Los Angeles, USA",
  });
  return (
    <div className="h-screen flex justify-around pt-8 w-[1224px]">
      <section>
        <PersonalDetail
          {...personalDetail}
          setPersonalDetail={setPersonalDetail}
        />
        <Education />
      </section>
      <section>
        <CVDisplay {...personalDetail} />
      </section>
    </div>
  );
}

export default App;
