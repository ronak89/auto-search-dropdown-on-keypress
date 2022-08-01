import React from "react";
import Select from "react-select";

import { colourOptions } from "./Data";

const colourStyles = {
  control: (base) => ({
    ...base,
    background: "#152033",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
  }),
};

const SearchwithDynamicdata = ({ name }) => (
  <Select label="Single select" options={colourOptions} styles={colourStyles} />
);

export default SearchwithDynamicdata;
