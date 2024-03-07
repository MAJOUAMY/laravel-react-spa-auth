import React, { useEffect } from "react";
import useAuthContext from "../context/AuthContext";

function Home() {
    const { user, getUser } = useAuthContext();
    
    return <div>{user?.name}</div>;
}

export default Home;
