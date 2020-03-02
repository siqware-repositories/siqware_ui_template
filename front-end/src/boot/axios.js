// import Vue from 'vue'
import axios from 'axios'
window.$axios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});
const token = JSON.parse(localStorage.getItem("userInfo"));
if (token) {
    $axios.defaults.headers.common['Authorization'] = `Bearer ${token.access_token}`;
}
