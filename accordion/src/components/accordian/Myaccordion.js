import React, { useState } from "react";
const Myaccordion = ({ question, answer }) => {
  const [show, unshow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p onClick={() => unshow(!show)}>{show ? "-" : "+"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers">{answer}</p>}
    </>
  );
};
export default Myaccordion;
