import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:2022/api/",
  headers: {
    "Content-type": "application/json",
  }
});


const token = localStorage.getItem('token')
if (token) {
    http.defaults.headers.common['x-access-token'] = token    
}

export default http;