import http from "./httpService";
const apiUrl= "http://localhost:5000";


const apiEndpoint = apiUrl + "/users/register";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}