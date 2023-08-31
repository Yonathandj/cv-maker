import { useState } from "react";

import PersonalDetail from "./components/personaldetail/PersonalDetail";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import CVDisplay from "./components/cvdisplay/CVDisplay";

function App() {
  const [personalDetail, setPersonalDetail] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [openEduExp, setOpenEduExp] = useState("none");
  return (
    <div className="h-screen flex justify-around pt-8 w-[1200px] m-auto">
      <section>
        <PersonalDetail
          personalDetail={personalDetail}
          setPersonalDetail={setPersonalDetail}
        />
        <Education
          educations={educations}
          setEducations={setEducations}
          openEduExp={openEduExp}
          setOpenEduExp={setOpenEduExp}
        />
        <Experience
          experiences={experiences}
          setExperiences={setExperiences}
          openEduExp={openEduExp}
          setOpenEduExp={setOpenEduExp}
        />
      </section>
      <section>
        <CVDisplay {...personalDetail} />
      </section>
    </div>
  );
}

export default App;
