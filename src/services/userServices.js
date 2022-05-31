import http from "./httpService";
const apiUrl= "http://localhost:5000";


const apiEndpoint = apiUrl + "/users/register";

export async function register(name,birthday,address,mobileNO,email,gender,username,password,slip,confirmPassword) {
  return await http.post(apiEndpoint, {
    Name:name, 
    email:email,
    username: username,
    mobileNo:mobileNO,
    gender:gender,
    password:password,
    confirmPassword:confirmPassword,
    registerFeeSlip:slip,
    birthday:birthday,
    address:address
  },{headers: {
    "Content-Type": "multipart/form-data",
  }});
}
export async function requestWorkOutScedule(current_weight,target_weight,target_time,workout_frequency,targets,add_notes) {
  return await http.post(apiEndpoint, {
    
  },{headers: {
    "Content-Type": "multipart/form-data",
  }});
}
export async function requestMealPlan(current_weight,target_weight,target_time,workout_frequency,targets,add_notes) {
  return await http.post(apiEndpoint, {
    
  },{headers: {
    "Content-Type": "multipart/form-data",
  }});
}