import http from "./httpService";
import {getJwt} from './authServices'
import RequestMealPlan from './../Pages/RequestMealPlanPage/index';
const apiUrl= "https://fitness24x7.herokuapp.com";


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

export async function profileUpdate(name,address,contactNo,email,DOB) {
 
  console.log(name,address,contactNo,email,DOB);
  return await http.put(apiUrl+'/users/update', {
    Name:name,
    address:address,
    mobileNo:contactNo,
    email:email,
    birthday:DOB
    
  },{headers: {
    "Content-Type": "multipart/form-data",
    'x-auth-token':getJwt()
  }});
}



export async function requestMealPlan(target_time,target_weight,current_weight,add_notes,veg_prefer) {
 
  return await http.post(apiUrl+'/mealplan/plan', {
  target_time:target_time,
  target_weight:target_weight,
  current_weight:current_weight,
  note:add_notes,
  veg_prefer:veg_prefer,
  },{headers: {
    "Content-Type": "multipart/form-data",
    'x-auth-token':getJwt()
  }});
}
export async function getMealPlan() {
  
  return await http.get(apiUrl+'/users/mealPlan',{
    headers: {
     
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}
export async function viewProfile() {
  
  return await http.get(apiUrl+'/users/me',{
    headers: {
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}

export async function requestWorkOutPlan(target_time,target_weight,current_weight,add_notes,workout_frequency,targets) {
  
  return await http.post(apiUrl+'/workoutplan/plan', {
  target_time:target_time,
  target_weight:target_weight,
  current_weight:current_weight,
  note:add_notes,
  workout_frequency:workout_frequency,
  targets:targets
  },{headers: {
    "Content-Type": "multipart/form-data",
    'x-auth-token':getJwt()
  }});
}
export async function getWorkoutPlan() {
  
  return await http.get(apiUrl+'/users/workPlan',{
    headers: {
     
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}