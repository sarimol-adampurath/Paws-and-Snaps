import axios from "axios";

// Use production API URL if available, fallback to localhost for development
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export const axiosReq = axios.create({
    withCredentials: true,
});
export const axiosRes = axios.create({
    withCredentials: true,
});

/*https://paws-and-snaps-d602158cc7f7.herokuapp.com/*/ 