import React, { useEffect, useState } from "react";
import "./home.css";

const retrieve = () => {
  const [userData, setUserData] = useState(null);
  const [search, setsearch] = useState("");

  function findSolution() {
    const sesstionData = JSON.parse(localStorage.getItem("user"));

    const resultData = sesstionData.filter((item) => item.aadhar === search);

    setUserData(resultData);
  }

  return (
    <div className="add-person-tab">
      <div className="add-person">
        <h4>Retrieve Information</h4>
      </div>

      <div className="search-input">
        <input
          type="number"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={findSolution}>Find</button>
      </div>

      <div>
        {userData === null ? (
          <h4 className="no-use">No user Found</h4>
        ) : (
          userData.map((item) => {
            return (
              <div key={item.aadhar} className="data-found">
                <p>Name:{item.name}</p>
                <p>Date of Birth:{item.date}</p>
                <p>Aadhar:{item.aadhar}</p>
                <p>Mobile:{item.mobile}</p>
                <p>Age:{item.age}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default retrieve;
