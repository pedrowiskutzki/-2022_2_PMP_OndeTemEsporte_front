import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8017/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const api1 = axios.create({
    baseURL: "http://localhost:8017/",
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export const api2 = axios.create({
    baseURL: "http://localhost:8017/",
    
});


