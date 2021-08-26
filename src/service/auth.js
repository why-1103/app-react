import { post } from "../utils/request";

export function loginApp(user) {
  return post("/api/v1/user/login", user);
}
