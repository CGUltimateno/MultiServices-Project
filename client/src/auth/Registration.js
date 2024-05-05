import React, { useState } from "react";
import classes from "./Registration.module.css";
import { useHistory } from "react-router-dom";
import api from "../api";

export const Registration = ({  }) => {
  const history = useHistory();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        await api
            .userRegister(inputs)
            .then((res) => {
                console.log("user registration successful", res);
                sessionStorage.setItem("userId", res?.data?.id);
                setInputs(null);
                history.push("/login"); // Redirect to login page
            })
            .catch((err) => {
                setError(
                    err?.response?.data?.message ||
                    "Registration failed. Please try again."
                );
            })
            .finally(() => setIsLoading(false));
    };

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span className={classes.labelText}>Username:</span>
        <input
          className={classes.input}
          type="text"
          name="username"
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </label>
      <label className={classes.label}>
        <span className={classes.labelText}>Password:</span>
        <input
          className={classes.input}
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </label>
      <input className={classes.submit} type="submit" value="Register" />
      {error && <p className={classes.errorMsg}>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </form>
  );
};
