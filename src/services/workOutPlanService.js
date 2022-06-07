import http from "./httpService";
import {getJwt} from './authServices'



export async function uploadWorkOutPlan(file,id) {
  console.log(id)
  return await http.post(`/a_uploadWorkplan/addWoP`, {
    file_:file,
    id_:id
  },{headers: {
    "Content-Type": "multipart/form-data",
    'x-auth-token':getJwt()
  }});
}

export async function workOutRequestList() {
  return await http.get('/admin/workoutList',{
    headers: {
     
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}
