import React from "react";
import "./Userscontainer.css";
import Card from "../../components/Card/Card";
import { connect } from "react-redux";

const userscontainer = (props) => {
  let users =
    props.Users.length === 0 ? (
      <span>No Users To Display</span>
    ) : (
      props.Users.map((user, index) => (
        <Card
          key={index}
          userName={user.UserName}
          phoneNumber={user.PhoneNumber}
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
