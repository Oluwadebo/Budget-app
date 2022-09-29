import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Budget = () => {
    const formik = useFormik({
        initialValues: {
            expense: "",
            cost: "",
        },
        onSubmit: (values) => {
            console.log(values);
            //   let debo = JSON.parse(localStorage.getItem("call"));
            //   if (values) {
            //     for (const a of debo) {
            //       let User = values;
            //       if (a["email"] === User.email && a["password"] === User.password) {
            //         localStorage.signinEmail = JSON.stringify(User.email);
            //         localStorage.users = JSON.stringify(a);
            //         // navigate("/Dashboard");
            //       } else {
            //         let err =
            //           "User-Not-Found, Please check for mistakes and try again.";
            //         // setError(err);
            //       }
            //     }
            //   }
        },
        validationSchema: yup.object({
            expense: yup
                .string()
                .required("This field is required")
                .min(4, "must be greater than three"),
            cost: yup
                .string()
                .required("This field is required")
                .min(4, "must be greater than two"),
        }),
    });
    return (
        <>
            <div className="container">
                <center>
                    <h2 className="py-4 text-light">Calculate your Budget</h2>
                </center>
                <div className="row mt-5">
                    <div className="shadow asde col-12 p-4">
                        <center>
                            <h3 className=" pb-2 text-light">Expense Table</h3>
                        </center>
                        <div className="row">
                            <div className="col col-md-4">
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            placeholder="Please Enter Your Expense Name"
                                            className={
                                                formik.errors.expense && formik.touched.expense
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            onChange={formik.handleChange}
                                            style={{ backgroundColor: "#F5F7FA" }}
                                            name="expense"
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.expense && (
                                            <div style={{ color: "red" }} className="my-2">
                                                {formik.errors.expense}
                                            </div>
                                        )}
                                        <label>Please Enter Your Expense Name</label>
                                    </div>
                                    <div className="form-floating my-3">
                                        <input
                                            type="text"
                                            placeholder="Please Enter Your Expense Amount"
                                            className={
                                                formik.errors.cost && formik.touched.cost
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            onChange={formik.handleChange}
                                            style={{ backgroundColor: "#F5F7FA" }}
                                            name="cost"
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.cost && (
                                            <div style={{ color: "red" }} className="my-2">
                                                {formik.errors.cost}
                                            </div>
                                        )}
                                        <label>Please Enter Your Expense Amount</label>
                                        <button
                                            type="submit"
                                            className="btn btn-success form-control py-3 mt-3 asd">
                                            ADD EXPENSE
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-8 text-light">
                                <div className="row">
                                    <div className="col-6">
                                        <b><p>Expense Title</p></b>
                                    </div>
                                    <div className="col-6">
                                        <b><p>Expense Value($)</p></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow asde col-12 p-4">
                        <center>
                            <h3 className=" pb-2 text-light">Expense Table</h3>
                        </center>
                        <div className="row">
                            <div className="col col-md-4">
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            placeholder="Please Enter Your Expense Name"
                                            className={
                                                formik.errors.expense && formik.touched.expense
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            onChange={formik.handleChange}
                                            style={{ backgroundColor: "#F5F7FA" }}
                                            name="expense"
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.expense && (
                                            <div style={{ color: "red" }} className="my-2">
                                                {formik.errors.expense}
                                            </div>
                                        )}
                                        <label>Please Enter Your Expense Name</label>
                                    </div>
                                    <div className="form-floating my-3">
                                        <input
                                            type="text"
                                            placeholder="Please Enter Your Expense Amount"
                                            className={
                                                formik.errors.cost && formik.touched.cost
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            onChange={formik.handleChange}
                                            style={{ backgroundColor: "#F5F7FA" }}
                                            name="cost"
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.cost && (
                                            <div style={{ color: "red" }} className="my-2">
                                                {formik.errors.cost}
                                            </div>
                                        )}
                                        <label>Please Enter Your Expense Amount</label>
                                        <button
                                            type="submit"
                                            className="btn btn-success form-control py-3 mt-3 asd">
                                            ADD EXPENSE
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-8 text-light">
                                <div className="row">
                                    <div className="col-6">
                                        <b><p>Expense Title</p></b>
                                    </div>
                                    <div className="col-6">
                                        <b><p>Expense Value($)</p></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Budget;
