import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from "./endpoint";

const Signup = () => {
  const navigate = useNavigate();
  const [allUser, setallUser] = useState([]);
  const [Error, setError] = useState("");
  const [loader, setloader] = useState(false)

  let lower = new RegExp(`(?=.*[a-z])`);
  let upper = new RegExp(`(?=.*[A-Z])`);
  let number = new RegExp(`(?=.*[0-9])`);

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setloader(prev => true)
      axios.post(`${baseUrl}adminsignup`, values).then((credentials) => {
        if (credentials) {
          let Err = credentials.data.message;
          if (Err == "Email already used") {
            setloader(prev => false)
            setError("Email already used");
          } else {
            setloader(prev => false)
            navigate("/Signin")
          }
        }
      })
    },
    validationSchema: yup.object({
      Name: yup
        .string()
        .required("This field is required")
        .min(4, "provide your full name"),
      email: yup
        .string()
        .required("This field is required")
        .email("must be a valid email"),
      password: yup
        .string()
        .required("This field is required")
        .matches(lower, "Must include lowerCase letter")
        .matches(upper, "Must include upperCase letter")
        .matches(number, "Must include a number")
        .min(5, "must be greater than 5 charaters"),
    }),
  });
  const toggle = useRef();
  const i = useRef();
  const password = useRef();

  const showHide = () => {
    if (password.current.type === "password") {
      password.current.setAttribute("type", "text");
      toggle.current.classList.add("hide");
      i.current.classList = "fa fa-eye-slash";
    } else {
      password.current.setAttribute("type", "password");
      i.current.classList = "fa fa-eye";
      toggle.current.classList.remove("hide");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row mx-auto mt-5">
          <div className="shadow col-12 col-md-8 mx-auto px-4 pb-3 asd">
            <h2 className="m-4 text-light">
              <b>
                <i>Create an account</i>
              </b>
            </h2>
            <p>
              <b className="text-danger">{Error}</b>
            </p>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={
                    formik.errors.Name && formik.touched.Name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  style={{ backgroundColor: "#F5F7FA" }}
                  name="Name"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Name && (
                  <div style={{ color: "red" }} className="my-2">
                    {formik.errors.Name}
                  </div>
                )}
                <label>&#x1F464;&nbsp; Your Name</label>
              </div>
              <div className="form-floating my-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  style={{ backgroundColor: "#F5F7FA" }}
                  name="email"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && (
                  <div style={{ color: "red" }} className="my-2">
                    {formik.errors.email}
                  </div>
                )}
                <label>&#x1F4E7;&nbsp; Your email</label>
              </div>
              <div className="form-floating my-3">
                <input
                  type="password"
                  placeholder="Your password"
                  className={
                    formik.errors.password && formik.touched.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  ref={password}
                  maxLength={10}
                  onChange={formik.handleChange}
                  style={{ backgroundColor: "#F5F7FA" }}
                  name="password"
                  onBlur={formik.handleBlur}
                />
                <div
                  id="toggle"
                  ref={toggle}
                  onClick={showHide}
                  className="gose pe-4"
                >
                  <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                </div>
                {formik.touched.password && (
                  <div style={{ color: "red" }} className="my-2">
                    {formik.errors.password}
                  </div>
                )}
                <label>&#x1F512;&nbsp; Your password</label>
                <button
                  type="submit"
                  className="btn btn-success form-control py-3 mt-3"
                >
                  <b>Sign-Up</b>
                  {loader && (
                    <div className="spin">
                      <div className="loader"></div>
                    </div>
                  )}
                </button>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-8 text-light">
                      <p style={{ opacity: "0.6" }}>Already have an account?</p>
                    </div>
                    <div className="col-4">
                      <p>
                        <b>
                          <Link to="/Signin" className="sig">
                            Sign-In
                          </Link>
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
