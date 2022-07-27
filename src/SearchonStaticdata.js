import React, { useState } from "react";
import USERS from "./Data";
import "./App.css";
import Highlighter from "react-highlight-words";

function SearchonStaticdata() {
  // the value of the search field
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(USERS);

  // the search result

  const [foundUsers, setFoundUsers] = useState("");
  const [inputLength, setinputLength] = useState("");

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      setinputLength(keyword);
      const results = userData.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });

      if (inputLength.length >= 2) {
        setFoundUsers(results);
      } else {
        setFoundUsers("");
      }
    }
    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {name && foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            // <li key={user.id} className="user">

            <li key={user.id} className="user">
              {/* <span className="user-id">{user.id}</span> */}

              <span className={user.name.length >= 3 ? "user-name" : "user"}>
                {user.name}
              </span>

              {/* <span className="user-age">{user.age} year old</span> */}
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default SearchonStaticdata;
