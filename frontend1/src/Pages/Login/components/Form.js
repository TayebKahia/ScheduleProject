import React from "react";
import accounts from "../data";
import data from "../data";

function Form() {
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const [formErrors, setFormErrors] = React.useState({});

  const [formIsValid, setFormIsValid] = React.useState(false);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [accountsData, setEmailData] = React.useState(accounts.data.accounts);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    validateField(name, value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/login',
        {
          method: 'POST',
          crossDomain: true,
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === 'success') {
        alert('Login successful');
        window.localStorage.setItem('token', data.data);
        // window.location.href = "./tables";
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  

  const validateField = (name, value) => {
    let errors = { ...formErrors };
    switch (name) {
      case "email":
        errors.email =
          !value || !/\S+@\S+\.\S+/.test(value)
            ? "Please enter a valid email address"
            : "";
        break;
      case "password":
        errors.password =
          !value || value.length < 6
            ? "Password must be at least 6 characters long"
            : "";
        break;

      default:
        break;
    }
    setFormErrors(errors);
    setFormIsValid(Object.values(errors).every((err) => err === ""));
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required="required"
          />
          <label htmlFor="email">Email </label>
          {isSubmitting && formErrors.email && (
            <div className="error err-email">{formErrors.email}</div>
          )}
        </div>
        <div className="form-input">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required="required"
          />
          <label htmlFor="password">Password</label>
        </div>
        {isSubmitting && formErrors.password && (
          <div className="error err-pass">{formErrors.password}</div>
        )}
        <button type="">SIGN IN</button>
      </form>
    </div>
  );
}

export default Form;
