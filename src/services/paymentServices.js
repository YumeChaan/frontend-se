import http from "./httpService";
import {getJwt} from './authServices'
const apiUrl= "http://localhost:5000";


const apiEndpoint = apiUrl + "/payment/";

export async function monthlyFeePay(month,notes,receipt) {
  return await http.post(apiEndpoint, {
    month:month,
    description:notes,
    slip:receipt

  },{headers: {
    "Content-Type": "multipart/form-data",
    'x-auth-token':getJwt()
  }});
}
