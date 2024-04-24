import React from "react";
import { Routes, Route } from "react-router-dom";

import Head from "./header.jsx";
import But from "./Button.jsx";
import Person from "./addperson.jsx";
import Retrieve from "./retrieve.jsx";

const Home = () => {
  return (
    <div>
      <Head />
      <But />
      <Routes>
        <Route path="/addPerson" element={<Person />}></Route>
        <Route path="/retrieve" element={<Retrieve />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
