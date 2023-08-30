import { useState } from "react";

import PersonalDetail from "./components/personaldetail/PersonalDetail";
import Education from "./components/education/Education";
import CVDisplay from "./components/cvdisplay/CVDisplay";

function App() {
  const [personalDetail, setPersonalDetail] = useState({
    name: "Yesaya Armando",
    email: "",
    phone: "",
    address: "",
  });
  const [educations, setEducations] = useState([]);
  return (
    <div className="h-screen flex justify-around pt-8 w-[1200px] m-auto">
      <section>
        <PersonalDetail
          personalDetail={personalDetail}
          setPersonalDetail={setPersonalDetail}
        />
        <Education educations={educations} setEducations={setEducations} />
      </section>
      <section>
        <CVDisplay {...personalDetail} />
      </section>
    </div>
  );
}

export default App;
