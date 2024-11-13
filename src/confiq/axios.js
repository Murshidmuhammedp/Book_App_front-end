import axios from "axios";

export const customAxios = axios.create({
    baseURL: "https://book-app-back-end-qhr8.onrender.com"
    // baseURL: "http://localhost:3456"
});