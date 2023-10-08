import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import "../Css/UserRegistration.css";
import SweetAlert2 from "sweetalert2";
import Spinner from "./Spinner";
import * as yup from "yup";

export default function UserRegistration() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        let resp = await fetch("https://event-hub-huwl.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2),
        });

        if (resp.ok) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            SweetAlert2.fire({
              title: "Success!",
              text: "Registration is successful, please log in to continue",
              icon: "success",
              confirmButtonText: "Nice",
              confirmButtonColor: "#f1cc17",
            });
            navigate("/login");
          }, 2000);
        } else {
          let errorData = await resp.json();
          if (resp.status === 500) {

            setErrors("Internal server error. Please try again later.");
          } else if (resp.status === 400) {
            setErrors("Username or email already exists.");
          } else {
            setErrors(errorData.message);
          }
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    },
  });

  return (
    <>
      <div className="signUpBackgroundDiv">
        <div className="signUpDiv">
          <h1>Sign Up</h1>
          <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
            {/* Username */}
            <label htmlFor="username">Username</label>
            <br />
            <input
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div style={{ color: "red" }}>{formik.errors.username}</div>
            ) : null}
            <br />

            {/* Email */}
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <br />

            {/* Password */}
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
            <br />

            {isLoading ? <Spinner /> : <button type="submit">Sign Up</button>}
          </form>
          {Object.keys(errors).length > 0 && (
            <p style={{ color: "red" }}>{errors}</p>
          )}
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
}
