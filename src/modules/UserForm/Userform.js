import React, { useState, useEffect } from "react";
import "./Userform.css";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import { submitUser } from "../../actions/actions";
import CircularProgress from "@material-ui/core/CircularProgress";

const defaultForms = [
  {
    label: "User Name",
    type: null,
    helperText: "Enter your user name",
    field: "UserName",
    error: false,
  },
  {
    label: "Phone Number",
    type: null,
    helperText: "Please enter your phone number",
    field: "PhoneNumber",
    error: false,
  },
  {
    label: "Password",
    type: "password",
    helperText: "Choose your password",
    field: "Password",
    error: false,
  },
  {
    label: "Confirm Password",
    type: "password",
    helperText: "Repeat your password",
    field: "RepeatedPassword",
    error: false,
  },
];
const Userform = (props) => {
  const [newUser, setUser] = useState({
    UserName: "",
    PhoneNumber: "",
    Password: "",
    RepeatedPassword: "",
  });
  const [forms, setForms] = useState(defaultForms);

  useEffect(() => {
    if (props.Isloading === false && props.error === false)
      setUser({
        UserName: "",
        PhoneNumber: "",
        Password: "",
        RepeatedPassword: "",
      });
  }, [props.Isloading]);

  const Validation = (userInput, type) => {
    switch (type) {
      case "UserName":
        return [
          userInput.match("^(?=.{1,32}$)") ? true : false,
          "Max length 32 chars",
        ];

      case "PhoneNumber":
        return [
          userInput.match(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          )
            ? true
            : false,
          "invalid phone number",
        ];

      case "Password":
        return [
          userInput.match("^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,12}$)")
            ? true
            : false,
          "Password must contain: 6-12 chars,at least 1 special char and 1 uppercase letter",
        ];
      default:
        return [
          newUser.RepeatedPassword === newUser.Password ? true : false,
          "Passwords do not match",
        ];
    }
  };

  const HandleUserInput = (value, fieldType) => {
    let tempUser = { ...newUser };
    tempUser[fieldType] = value;
    setUser(tempUser);
  };

  const ValidateForm = () => {
    //looping over the newuser  object and validate each , set error flag to true in each field if needed.
    let HasError = false;

    Object.keys(newUser).forEach((field, index) => {
      let ValidationResult = Validation(newUser[field], field);

      if (!ValidationResult[0]) {
        let tempForms = [...forms];
        tempForms[index].error = true;
        tempForms[index].helperText = ValidationResult[1]; //setting the error string
        setForms(tempForms);
        HasError = true;
      } else {
        let tempForms = [...forms];
        tempForms[index].error = false;
        tempForms[index].helperText = defaultForms[index].helperText; //setting the error string to default
        setForms(tempForms);
      }
    });
    if (HasError) return;
    setForms(defaultForms);
    props.Submit(newUser);
  };

  let message = null;
  if (props.error)
    message = (
      <>
        <Button onClick={ValidateForm}>SUBMIT</Button>
        <span>Something went wrong</span>{" "}
      </>
    );
  else
    message =
      props.Isloading === true ? (
        <CircularProgress />
      ) : (
        <Button onClick={ValidateForm}>SUBMIT</Button>
      );

  return (
    <div className="InputsContainer">
      {forms.map((inputField, index) => (
        <TextField
          error={inputField.error}
          autoFocus={index === 0 ? true : false}
          key={index}
          label={inputField.label}
          type={inputField.type}
          helperText={inputField.helperText}
          variant="outlined"
          margin="normal"
          onChange={(event) =>
            HandleUserInput(event.target.value, inputField.field)
          }
          value={newUser[inputField.field]}
        />
      ))}
      <div className="helperContainer">{message}</div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    Submit: (newUser) => dispatch(submitUser(newUser)),
  };
};
const mapStateToProps = (state) => {
  return {
    Isloading: state.loading,
    error: state.error,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Userform);
