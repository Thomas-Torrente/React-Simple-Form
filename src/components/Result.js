import React from "react";

const Result = ({ username, email, password, setForm }) => {
  return (
    <>
      <div className="form">
        <h1>Your Information is:</h1>
        <br />
        <div>Name: {username}</div>
        <br />
        <div>Email: {email}</div>
        <br />
        <div>Password: {password}</div>
        <br />
        <div>Save your password to a save location</div>
        <button
          onClick={() => {
            setForm(false);
          }}
        >
          Edit Your Information
        </button>
      </div>
    </>
  );
};

export default Result;
