import React from "react";
import "./App.css";
import { Route, Routes ,Navigate } from "react-router-dom";
import Navbar from "./components/NavBar/Nav";
import Userform from "./components/UserForm/Userform";
import UserContainer from "./components/UsersContainer/Userscontainer";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/users" exact element={<UserContainer />} />
        <Route path="/" excat element={<Userform />} />
        <Route
        path="*"
        element={<Navigate to="/" />}
      />
      </Routes>
    </div>
  );
};

export default App;
