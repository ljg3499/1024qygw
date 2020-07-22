import axios from "axios";

var insta = axios.create({
  //线上
  baseURL: "https://admin.1024group.com",
  // baseURL: "http://47.57.87.177:8082",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  }
});

export default insta;
