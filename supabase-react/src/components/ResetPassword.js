import React from "react";
import { useRef, useState } from "react";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function ResetPassword() {
  const emailOneRef = useRef();
  const emailTwoRef = useRef();

  async function handlePasswordReset(e) {
    e.preventDefault();
    console.log(emailOneRef, emailTwoRef);
  }

  return (
    <div>
      <form onSubmit={handlePasswordReset}>
        <label htmlFor="email_one">Enter Email</label>
        <input
          className="input-box"
          id="email_one"
          type="email"
          ref={emailOneRef}
        />
        <label htmlFor="email_two">Re-Enter Email</label>
        <input
          className="input-box"
          id="email_two"
          type="email"
          ref={emailTwoRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
