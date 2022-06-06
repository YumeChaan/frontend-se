import http from "./httpService";
import {getJwt} from './authServices'
const apiUrl= "https://fitness24x7.herokuapp.com";




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
