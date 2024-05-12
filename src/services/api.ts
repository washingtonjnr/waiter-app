import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
export const apiUrl = "http://172.20.10.10:3001";

export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
