import React, { useState } from "react";
import { questions } from "./api";
import Myaccordion from "./Myaccordion";
import accordion from "./accordion.css";
const Accordion = () => {
  const [data, setdata] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1>REACT FAQS </h1>
        {data.map((item) => {
          return <Myaccordion key={questions.id} {...item} />;
        })}
      </section>
    </>
  );
};
export default Accordion;
