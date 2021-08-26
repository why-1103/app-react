import axios from "axios";
import { getToken } from "./auth";

const instance = axios.create({
  // baseURL: "http://localhost:3000",
  timeout: 5000,
});

// 添加全局请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么 获取token
    config.headers["authorization"] = "Bearer" + getToken();
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

/**
 *
 * @param {*} url 请求地址
 * @param {*} params url参数
 * @returns
 */

export function get(url, params) {
  return instance.get(url, {
    params,
  });
}

/**
 *
 * @param {*} url 请求地址
 * @param {*} data 数据
 * @returns
 */

export function post(url, data) {
  return instance.post(url, data);
}

/**
 *
 * @param {*} url 请求地址
 * @param {*} data 数据
 * @returns
 */

export function put(url, data) {
  return instance.put(url, data);
}

/**
 *
 * @param {*} url 请求地址
 * @returns
 */

export function del(url) {
  return instance.delete(url);
}
