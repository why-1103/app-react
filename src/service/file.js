import { post, get } from "../utils/request";

export function getFiles() {
  // return request({
  //   url: "/getList/file",
  //   method: "get",
  // });
  return get("/getList/file", {});
}

export function uploadFile(data) {
  // return request({
  //   url: "/upload/file",
  //   data,
  //   method: "post",
  // });
}
