import http from "./httpService";
import {getJwt} from './authServices'



const apiEndpoint =  "/payment/";

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

export async function pendingPaymentList() {
  
  return await http.get('/payment/paymentList',{
    headers: {
     
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}
export async function getPaymentsofSpecificuser() {
  
  return await http.get('/payment/paymentOfSpecificUser',{
    headers: {
     
      'content-type': 'application/json',
      'x-auth-token':getJwt()
    }
  });
}
export async function aprovePayment(id) {
  
    return await http.get(`/payment/${id}`,{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function declinePayment(id) {
  
    return await http.get(`/payment/decline/${id}`,{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  } 