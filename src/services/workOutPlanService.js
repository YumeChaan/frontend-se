import http from "./httpService";
import {getJwt} from './authServices'

const apiUrl ="http://localhost:5000";

export async function uploadWorkOutPlan(file,id) {
  console.log(id)
  return await http.post(apiUrl+`/a_uploadWorkplan/addWoP`, {
    file_:file,
    id_:id
  },{headers: {
    "Content-Type": "multipart/form-data",
    'x-auth-token':getJwt()
  }});
}

export async function workOutRequestList() {
  return await http.get(apiUrl+'/admin/workoutList',{
    headers: {
     
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}
