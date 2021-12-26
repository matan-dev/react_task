import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({ userName = "", phoneNumber = "" }) => {
  // return in case one of the props is not provided.
  if (!userName || !phoneNumber) {
    return null;
  }
  return (
    <div className="Card">
      <h4>
        User: <span>{userName}</span>
      </h4>
      <h4>
        Phone Number: <span>{phoneNumber}</span>
      </h4>
    </div>
  );
};

Card.propTypes = {
  userName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default Card;
