import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
// import axios from "../api/axios";

function Register() {
    const [registerData, setRegisterData] = useState({});
    const { errors, register } = useAuthContext();

    function handleChange(e) {
        setRegisterData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        // console.log(registerData);
        // try {
        //     await axios.get("/sanctum/csrf-cookie");
        //     await axios.post("/register", registerData );
        //     const { data } = await axios.get("/api/user");
        // } catch (error) {
        //     if (error.response.status == 422) {
        //         setErrors(error.response.data.errors);
        //     }
        // }
        register(registerData);
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>register</h1>
            <label htmlFor="name">name</label>
            <input type="text" name="name" onChange={(e) => handleChange(e)} />
            {errors.name && (
                <div style={{ color: "red" }}>{errors.name[0]}</div>
            )}
            <br />
            <label htmlFor="email">email</label>
            <input type="text" name="email" onChange={(e) => handleChange(e)} />
            <br />
            {errors.email && (
                <div style={{ color: "red" }}>{errors.email[0]}</div>
            )}
            <label htmlFor="password">password</label>
            <input
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
            />
            <br />
            {errors.password && (
                <div style={{ color: "red" }}>{errors.password[0]}</div>
            )}
            <label htmlFor="password">password</label>
            <input
                type="password"
                name="password_confirmation"
                onChange={(e) => handleChange(e)}
            />
            <br />
            <button>register</button>
        </form>
    );
}

export default Register;
