import React, { useEffect, useState } from 'react'
import "./Signup.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const fetchUserData = async () => {
        try {
            const userCredential = await axios.get("http://localhost:4000/userData")
            setUsers(userCredential.data)
        } catch (error) {
            alert("Something went Wrong")
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: ""
        },
        validate: values => {
            let error = {}

            if (values.Email === "") {
                error.Email = "Please enter your Username"
            } else if (!/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(values.Email)) {
                error.Email = "Invalid Email"
            }
            if (values.Password === "") {
                error.Password = "Please enter your Password"
            }
            return error
        },
        onSubmit: async values => {
            formik.resetForm();
            if (users && users.length > 0) {
                const matchedUser = users.find(user => user.Email_Address === values.Email && user.Password === values.Password);

                if (matchedUser) {
                    navigate("/portal");
                } else {
                    alert("Invalid credentials");
                }
            }
        }
    })
    return (
        <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
            <form className='login' onSubmit={formik.handleSubmit}>
                <h1 className='text-center'>Grow Green</h1>
                <p className='fs-4'>Username:</p>
                <TextField fullWidth id="Email" name='Email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email} />
                {
                    formik.touched.Email ? <span style={{ color: "red" }}>{formik.errors.Email}</span> : null
                }
                <p className='fs-4 mt-3'>Password:</p>
                <TextField fullWidth 
                    id="Password"
                    name='Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type='password'
                    value={formik.values.Password}
                />
                {
                    formik.touched.Password ? <span style={{ color: "red" }}>{formik.errors.Password}</span> : null
                }
                <p className='ms-3 mt-3'><Link to="/register">New User ? Register</Link></p>
                <Button type='submit' className='mt-1' variant="contained" sx={{ width: "100%" }}>LOGIN</Button>
            </form>
        </div>
    )
}

export default Signup;