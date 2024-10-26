import React from 'react'
import "./Register.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            First_Name: "",
            Last_Name: "",
            Phone_Number: "",
            Email_Address: "",
            Password: "",
            Confirm_Password: ""
        },
        validate: values => {
            let error = {}
            if(values.First_Name===""){
                error.First_Name="Please enter First Name"
            }
            if(values.Last_Name===""){
                error.Last_Name="Please enter Last Name"
            }
            if(values.Phone_Number===""){
                error.Phone_Number="Please enter Phone Number"
            }
            if(values.Email_Address===""){
                error.Email_Address="Please enter Email Address"
            }else if (!/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(values.Email_Address)) {
                error.Email_Address = "Invalid Email"
            }
            if(values.Password===""){
                error.Password="Please enter Password"
            }
            if (values.Confirm_Password === "") {
                error.Confirm_Password = "Please enter Confirm Password"
            } else if (values.Password !== values.Confirm_Password) {
                error.Confirm_Password = "Passwords do not match"
            }
            return error
        },
        onSubmit: async values => {
            navigate("/")
            try {
                await axios.post("http://localhost:4000/userCredentials",values)
            } catch (error) {
                alert("Something went Wrong")
            }
        }
    })
    return (
        <div className='container-fluid mt-1 mb-4 min-vh-100 d-flex justify-content-center align-items-center'>
            <form className='register' onSubmit={formik.handleSubmit}>
                <h5 className='text-center fw-bold mb-1'>Register</h5>
                <p className='fs-6 fw-bold'>First Name</p>
                <TextField fullWidth
                    id="First_Name"
                    name="First_Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.First_Name} />
                {
                    formik.touched.First_Name ? <span style={{color:"red"}}>{formik.errors.First_Name}</span> : null
                }
                <p className='fs-6 fw-bold mt-2'>Last Name</p>
                <TextField fullWidth
                    id="Last_Name"
                    name="Last_Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Last_Name} />
                {
                    formik.touched.Last_Name ? <span style={{color:"red"}}>{formik.errors.Last_Name}</span> : null
                }
                <p className='fs-6 fw-bold mt-2'>Phone Number</p>
                <TextField fullWidth
                    id="Phone_Number"
                    name="Phone_Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Phone_Number} />
                {
                    formik.touched.Phone_Number ? <span style={{color:"red"}}>{formik.errors.Phone_Number}</span> : null
                }
                <p className='fs-6 fw-bold mt-2'>Email Address</p>
                <TextField fullWidth
                    id="Email_Address"
                    name="Email_Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Email_Address} />
                {
                    formik.touched.Email_Address ? <span style={{color:"red"}}>{formik.errors.Email_Address}</span> : null
                }
                <p className='fs-6 fw-bold mt-2'>Password</p>
                <TextField fullWidth
                    id="Password"
                    name="Password"
                    type='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Password} />
                {
                    formik.touched.Password ? <span style={{color:"red"}}>{formik.errors.Password}</span> : null
                }
                <p className='fs-6 fw-bold mt-2'>Confirm Password</p>
                <TextField fullWidth
                    id="Confirm_Password"
                    name="Confirm_Password"
                    type='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Confirm_Password} />
                {
                    formik.touched.Confirm_Password ? <span style={{color:"red"}}>{formik.errors.Confirm_Password}</span> : null
                }
                <Button type="submit" sx={{ width: "100%", marginTop: "15px" }} variant="contained">Register</Button>
            </form>
        </div>
    )
}

export default Register;