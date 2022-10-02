import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState, } from "react";

const Budget = () => {
    const [admin, setadmin] = useState([]);
    const [budget, setbudget] = useState([])
    useEffect(() => {
        if (localStorage.admin) {
            let detail = JSON.parse(localStorage.admin);
            setadmin(detail);
        } else {
            setadmin([]);
        }
    }, []);
    const formik = useFormik({
        initialValues: {
            expense: "",
            cost: "",
        },
        onSubmit: (values) => {
            const newobj = [...admin, values];
            setadmin(newobj);
            localStorage.setItem("admin", JSON.stringify(newobj));
        },
        validationSchema: yup.object({
            expense: yup
                .string()
                .required("This field is required")
                .min(3, "must be greater than three"),
            cost: yup
                .string()
                .required("This field is required")
                .min(2, "must be greater than three"),
        }),
    });
    const formiks = useFormik({
        initialValues: {
            Budget: "",
        },
        onSubmit: (values) => {
            const newobjs = [...budget, values];
            setbudget(newobjs);
        },
        validationSchema: yup.object({
            Budget: yup
                .string()
                .required("This field is required")
                .min(2, "must be greater than two"),
        }),
    });
    const dele = (index) => {
        const third = admin.filter((item, ind) => index !== ind)
        setadmin(third);
        localStorage.setItem("admin", JSON.stringify(third));
    }
    let sum = 0;
    admin.forEach((val, index) => {
        sum = sum + parseFloat(val.cost)
    })
    let balan = 0;
    budget.forEach((val, index) => {
        balan = parseFloat(val.Budget) - sum
    })
    return (
        <>
            <div className="container">
                <center>
                    <h2 className="pt-4 text-light">Calculate your Budget</h2>
                </center>
                <div className="row my-4">
                    <div className="shadow asde col-12 px-4 pt-4 pb-2">
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
                                            type="number"
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
                                        {admin.map((item, index) => (
                                            <b key={index}><p style={{ textTransform: "capitalize" }}>{item.expense}<br /></p></b>
                                        ))}
                                    </div>
                                    <div className="col-6">
                                        <b><p>Expense Value(₦)</p></b>
                                        {admin.map((item, index) => (
                                            <b key={index}><p>₦ {item.cost}  <i className="fa fa-remove px-3" style={{ fontSize: "21px", color: "red" }} onClick={() => dele(index)} ></i><br /></p></b>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow asds col-12 px-4 pb-4 pt-2">
                        <center>
                            <h3 className="pb-2 text-light">Budget Table</h3>
                        </center>
                        <div className="row">
                            <div className="col col-md-4">
                                <form action="" onSubmit={formiks.handleSubmit}>
                                    <div className="form-floating my-3">
                                        <input
                                            type="number"
                                            placeholder="Please Enter Your Budget"
                                            className={
                                                formiks.errors.Budget && formiks.touched.Budget
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            onChange={formiks.handleChange}
                                            style={{ backgroundColor: "#F5F7FA" }}
                                            name="Budget"
                                            onBlur={formiks.handleBlur}
                                        />
                                        {formiks.touched.Budget && (
                                            <div style={{ color: "red" }} className="my-2">
                                                {formiks.errors.Budget}
                                            </div>
                                        )}
                                        <label>Please Enter Your Budget</label>
                                        <button
                                            type="submit"
                                            className="btn btn-success form-control py-3 mt-3 asd">
                                            CALCULATE
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-8 text-light">
                                <div className="row">
                                    <div className="col-4">
                                        <b><p>BUDGET</p></b>
                                        <i className="far fa-user as"></i>
                                        <p style={{ color: "green" }}>$ <span>
                                            {budget.map((item, index) => (<span>{item.Budget}</span>))}
                                        </span></p>
                                    </div>
                                    <div className="col-4">
                                        <b><p>EXPENSE</p></b>
                                        <i className="far fa-user as"></i>
                                        <p style={{ color: "red" }}>$ <span>{sum}</span></p>
                                    </div>
                                    <div className="col-4">
                                        <b><p>BALANCE</p></b>
                                        <i className="far fa-user as"></i>
                                        <p style={{ color: "green" }}>$ <span>{balan}</span></p>
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
