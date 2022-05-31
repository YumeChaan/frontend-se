import http from "./httpService";
import {getJwt} from './authServices';
const apiUrl= "http://localhost:5000";


const apiEndpoint = apiUrl + "/admin/addAdmin";
 
export async function addAdmin(name,birthday,address,mobileNO,email,gender,username,password,confirmPassword) {
  
  return await http.post(apiEndpoint, {
    Name:name, 
    email:email,
    username: username,
    mobileNo:mobileNO,
    gender:gender,
    password:password,
    confirmPassword:confirmPassword,
    birthday:birthday,
    address:address
  },{
    headers: {
     
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}
 
export async function adminList() {
  
    return await http.get(apiUrl+'/admin/adminslist',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }