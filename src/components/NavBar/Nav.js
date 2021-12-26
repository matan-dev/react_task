import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //marks the correct tab , based on the current url , works also if the user redirected to => /
  let initCurrentTab = location.pathname!=="/" && location.pathname !=="/users"? "/" : location.pathname;
  const [value, setValue] = useState(initCurrentTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      centered
    >
      <Tab label="Form" value="/" onClick={() => navigate("/")} />
      <Tab label="Users" value="/users" onClick={() => navigate("/users")} />
    </Tabs>
  );
};
export default Navbar;
