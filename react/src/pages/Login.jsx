import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";

// import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";

// second approach



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login,errors}=useAuthContext()
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       

        // try {
        //     await axios.get("/sanctum/csrf-cookie");
        //     await axios.post("/login", { email, password });
        //     const {data}=await axios.get("/api/user")
        //     console.log(data)
        //     navigate("/");
        // } catch (error) {
        //     if (error.response.status == 422) {
        //         setErrors(error.response.data.errors);
        //     }
            
        // }

        // ---

        login({email,password})
        
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>login</h1>

            <label htmlFor="">email</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {errors.email && (
                <div style={{ color: "red" }}>{errors.email[0]}</div>
            )}
            <label htmlFor="">password</label>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {errors.password && (
                <div style={{ color: "red" }}>{errors.password[0]}</div>
            )}
            <button>login</button>
        </form>
    );
}

export default Login;
