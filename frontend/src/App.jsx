import { useState } from "react";

import CVDisplay from "./components/CVDisplay";
import PersonalDetail from "./components/PersonalDetail";

function App() {
  const [personalDetail, setPersonalDetail] = useState({
    name: "Schevenko Tendean",
    email: "schete12@gmail.com",
    phone: 62123456789,
    address: "Los Angeles, USA",
  });
  return (
    <div className="w-screen h-screen flex justify-around pt-8">
      <section>
        <PersonalDetail
          {...personalDetail}
          setPersonalDetail={setPersonalDetail}
        />
      </section>
      <section>
        <CVDisplay {...personalDetail} />
      </section>
    </div>
  );
}

export default App;
