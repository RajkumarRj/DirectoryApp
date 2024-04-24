import React, { useEffect, useRef, useState } from "react";
import "./home.css";

const addperson = () => {
  const nameref = useRef();
  const dateref = useRef();
  const aadharref = useRef();
  const mobileref = useRef();
  const ageref = useRef();

  const [data, setdata] = useState(null);
  function calculateAge(e) {
    const datearr = e.target.value.split("-");
    ageref.current.value = new Date().getFullYear() - datearr[0];
  }
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("user"));
    setdata(localData);
  }, []);

  const maxDate = new Date().toISOString().split("T")[0];

  const saveData = (e) => {
    e.preventDefault();
    console.log(ageref.current.value);
    let newData = {
      name: nameref.current.value,
      date: dateref.current.value,
      aadhar: aadharref.current.value,
      mobile: mobileref.current.value,
      age: ageref.current.value,
    };

    let existingData = JSON.parse(localStorage.getItem("user"));
    if (existingData == null) {
      localStorage.setItem("user", JSON.stringify([newData]));
    } else {
      const updatedData = [...existingData, newData];

      localStorage.setItem("user", JSON.stringify(updatedData));
      setdata(updatedData);
      setNewEntry(false);
    }
  };

  function handleDelete(item) {
    const sesstionData = JSON.parse(localStorage.getItem("user"));
    if (confirm("Are you sure want to delete")) {
      const resultData = sesstionData.filter((data) => data.aadhar !== item);
      localStorage.setItem("user", JSON.stringify(resultData));
      console.log(resultData);
      setdata(resultData);
    }
  }

  const [newEntry, setNewEntry] = useState(false);

  return (
    <div className="add-person-tab">
      <div className="add-person">
        <h4>Add New Person</h4>
      </div>

      <div className="entry">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data === null ? (
              <tr>NO data</tr>
            ) : (
              data.map((item) => {
                return (
                  <tr key={item.aadhar}>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.aadhar}</td>
                    <td>{item.mobile}</td>
                    <td>{item.age}</td>
                    <td>
                      <button
                        className="del"
                        onClick={() => handleDelete(item.aadhar)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {newEntry && (
        <div className="person-form">
          <h3 className="h3">Fill below form for New Entry</h3>
          <form className="form" onSubmit={(e) => saveData(e)}>
            <input
              type="text"
              ref={nameref}
              placeholder="Enter your name"
              required
            />
            <input
              type="date"
              onChange={(e) => calculateAge(e)}
              ref={dateref}
              required
              max={maxDate}
            />
            <input
              type="number"
              placeholder="Enter aadhar number"
              min={111111111111}
              max={999999999999}
              ref={aadharref}
              required
            />
            <input
              type="number"
              placeholder="Enter Mobile number"
              ref={mobileref}
              min={1111111111}
              max={9999999999}
              required
            />
            <input type="number" ref={ageref} disabled placeholder="Age" />
            <input type="submit" className="sub" value={"save"} />
          </form>
        </div>
      )}

      <button className="add" onClick={() => setNewEntry(!newEntry)}>
        {newEntry === true ? "Cancel" : "Add"}
      </button>
    </div>
  );
};

export default addperson;
