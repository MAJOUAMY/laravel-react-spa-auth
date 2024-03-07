import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAuthContext from "./context/AuthContext";
import AuthLayouts from "./loyouts/AuthLayouts";
import GuestLayouts from "./loyouts/GuestLayouts";

function App() {
    const { user, logout } = useAuthContext();
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                {!user && <Link to={"/login"}>login</Link>}
                {!user && <Link to={"/register"}>register</Link>}
                {user && (
                    <button
                        onClick={() => {
                            logout();
                        }}
                    >
                        log out
                    </button>
                )}
            </nav>
            <Routes>
                <Route element={<AuthLayouts />}>
                    <Route path="/" element={<Home />}></Route>
                </Route>
                <Route element={<GuestLayouts />}>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
