import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000",
    
    withCredentials: true,
    withXSRFToken:true,
    // Referer: 'http://localhost:5173'
});
