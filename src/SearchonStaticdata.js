import React, { useState, useEffect } from "react";
import USERS from "./Data";
import paraText from "./NewData";
import "./App.css";
import Data from "./Data";

function SearchonStaticdata() {
  const [userData, setUserData] = useState(USERS);
  const [InfoData, setInfoData] = useState([]);
  const [ClickInfoData, setClickInfoData] = useState("");

  // the value of the search field
  const [name, setName] = useState("");

  // the search result

  const [foundUsers, setFoundUsers] = useState([]);
  const [inputLength, setinputLength] = useState("");
  const [temp, setTemp] = useState([]);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      setinputLength(keyword);
      let results = userData.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      if (inputLength.length >= 2) {
        setFoundUsers(results);
      }
    }
    setName(keyword);
  };

  const Getdata = (info) => {
    debugger;
    setInfoData(paraText);
    setClickInfoData(info.name);
  };

  useEffect(() => {
    if (name.length > 0) {
      var searchedPara = document.getElementById("divdata");
      var data = InfoData[0].split(" ");
      var ClickInfoSplit = ClickInfoData.split(" ");
      var newHTML = "";
      data.map((word) => {
        debugger;
        if (ClickInfoSplit.indexOf(word) > -1) {
          newHTML += "<b>" + word + "</b> ";
        } else {
          newHTML += word + " ";
        }
      });

      //var regex = RegExp(words, "gi"); // case insensitive
      //var replacement = "<b>" + words + "</b>";
      //var newHTML = searchedPara.innerHTML.replace(regex, replacement);
      searchedPara.innerHTML = newHTML;
    }
  }, [ClickInfoData]);
  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
      <div class="report_info">
        <div className="user-list">
          {name && foundUsers.length >= 2 ? (
            foundUsers.map((user) => (
              // <li key={user.id} className="user">
              <li key={user.id} className="user" onClick={() => Getdata(user)}>
                {/* <span className="user-id">{user.id}</span> */}
                <span className="user-name">{user.name}</span>
                {/* <span className="word-grey">{user.name}</span> */}
                {/* <span className="user-age">{user.age} year old</span> */}
              </li>
            ))
          ) : (
            // <select>
            //   {foundUsers.map((user) => (
            //     <option
            //       key={user.id}
            //       value={user.name}
            //       className="user"
            //       onClickCapture={() => Getdata(user)}
            //     >
            //       {user.name}
            //     </option>
            //   ))}
            // </select>
            <h1>No results found!</h1>
          )}
        </div>
      </div>
      <div id="divdata">
        {inputLength.length >= 2 && InfoData != null && InfoData != ""
          ? InfoData
          : ""}
      </div>
    </div>
  );
}

export default SearchonStaticdata;
