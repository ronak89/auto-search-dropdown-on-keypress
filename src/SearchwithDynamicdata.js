import { useState } from "react";
import SearchonStaticdata from "./SearchonStaticdata";

let names = [
  "Shea",

  "Ewing",

  "Yang",

  "Mcintosh",

  "Castillo",

  "Cunningham",

  "Johnston",

  "Mckay",

  "Roberson",

  "Perez",

  "Dudley",

  "Wood",
];

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <h2>Search filtering</h2>

      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <ul>
        {names

          .filter((name) => name.match(new RegExp(searchValue, "i")))

          .map((name) => {
            return <li key={name}>{name} </li>;
          })}
      </ul>
    </div>
  );
}

export default SearchwithDynamicdata;
