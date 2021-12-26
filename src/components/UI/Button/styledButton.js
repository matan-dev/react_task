import React from "react";
import styled from "styled-components";
const CustomButton = styled.button`
align-self: center;
cursor: pointer;
font-size: 1rem;
text-align: center;
width: fit-content;
height: 40px;
background-color: #1976d2;
color: white;
border: none;
border-radius: 5px;
transition: 1ms;
margin-top: 10px;
&:hover {
  background-color: white;
  color: #1976d2;
  border: 2px solid #1976d2;
  padding-bottom: 0px;
}
`;

const styledButton = props => {
  return <CustomButton onClick={props.onClick}>{props.children}</CustomButton>;
};
export default styledButton;
