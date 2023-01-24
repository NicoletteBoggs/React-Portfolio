import React, { useState } from "react";
function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      //   const isValid = validateEmail(e.target.value);
      if (!e.target.value) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
  return (
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div class="form-group">
          {/* <label for="name">Name</label> */}
          <input
            type="name"
            class="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Enter name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>

        {/* <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div> */}
        <div class="form-group">
          {/* <label for="email">Email address</label> */}
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            defaultValue={email}
          />
        </div>
        {/* <label htmlFor="message">Message:</label> */}
        <div class="form-group">
          <input
            type="message"
            class="form-control"
            id="exampleInputMessage"
            aria-describedby="emailMessage"
            placeholder="Enter message"
            defaultValue={message}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Contact;
