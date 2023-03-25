import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Australia", value: "Australia" },
  { label: "Bermuda", value: "Bermuda" },
  { label: "Canada", value: "Canada" },
  { label: "Cameroon", value: "Cameroon" },
  { label: "Denmark", value: "Denmark" },
  { label: "France", value: "France" },
  { label: "Finland", value: "Finland" },
  { label: "Germany", value: "Germany" }

  // { label: "India", value: "India", disabled: true }
];

const Example = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select Location</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default Example;
