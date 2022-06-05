import http from "./httpService";
import {getJwt} from './authServices'
const apiUrl= "http://localhost:5000";




export async function uploadMealPlan() {
  return await http.post(apiUrl+'/a_uploadMealplan/addMP', {
    
  },{headers: {
    "Content-Type": "multipart/form-data",
    'x-auth-token':getJwt()
  }});
}
