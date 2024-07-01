import { useState } from "react";
function Careers({ name }) {
  const [value, setValue] = useState(0);
  const OnIncrement = () => {
    console.log("clicked, its working");
    setValue(value + 1);
  };
  return (
    <>
      <button
        onClick={() => {
          OnIncrement();
        }}
      >
        Increment
      </button>
      {/* <h2>{value}</h2> */}
      {value === 5 ? <h2>{value}</h2> : "no Data"}
    </>
  );
}
export default Careers;
