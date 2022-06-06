import http from "./httpService";
import {getJwt} from './authServices'
const apiUrl= "http://localhost:5000";




export async function uploadMealPlan(file,id) {

  return await http.post(apiUrl+`/a_uploadMealplan/addMP`, {
    file_:file,
    id_:id
  },{headers: {
    "Content-Type": "multipart/form-data",
    'x-auth-token':getJwt()
  }});
}

export async function mealRequestList() {
  return await http.get(apiUrl+'/admin/mealplanlist',{
    headers: {
     
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}
