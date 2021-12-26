import React from "react";
import "./singleCard.scss";


const singleCard = (props) => {
  return (

    <div className="Card">
      <h4>
        User: <span>{props.UserName}</span>
      </h4>
      <h4>
        Phone Number: <span>{props.PhoneNumber}</span>
      </h4>
    </div>
  );
};
export default singleCard;
