import React from "react";
import "./Userscontainer.css";
import Usercard from "../UI/singleUserCard/singleCard";
import { connect } from "react-redux";

const userscontainer = (props) => {
  let users =
    props.Users.length === 0 ? (
      <span>No Users To Display</span>
    ) : (
      props.Users.map((user, index) => (
        <Usercard
          key={index}
          UserName={user.UserName}
          PhoneNumber={user.PhoneNumber}
        />
      ))
    );
  return <div id="CardsContainer">{users}</div>;
};

const mapStateToProps = (state) => {
  return {
    Users: state.users,
  };
};
export default connect(mapStateToProps)(userscontainer);
