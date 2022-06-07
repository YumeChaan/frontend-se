import http from "./httpService";
import {getJwt} from './authServices';



const apiEndpoint = "/admin/addAdmin";
 
export async function addAdmin(name,birthday,address,phone,email,gender,username,password,confPassword) {
  
  return await http.post(apiEndpoint, {
    Name:name, 
    email:email,
    username: username,
    mobileNo:phone,
    gender:gender,
    password:password,
    confirmPassword:confPassword,
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
  
    return await http.get('/admin/adminslist',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function pendingMemberList() {
  
    return await http.get('/admin/pendingUserList',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }  export async function memberList() {
  
    return await http.get('/admin/userslist',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function approveRegistration(id) {
  
    return await http.get(`/admin/accept/${id}`,{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function declineRegistration(id) {
  
    return await http.get(`/admin/decline/${id}`,{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  } 
  export async function declineAdmin(id) {
  
    return await http.get(`/admin//remove/${id}`,{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  } 
  export async function pendingRegistrtionsCount() {
  
    return await http.get('/admin/pendingRegistrationsCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function acceptedUserCount() {
  
    return await http.get('/admin/acceptedRegistrationsCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function adminCount() {
  
    return await http.get('/admin/acceptedAdminsCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function pendingPaymentsCount() {
  
    return await http.get('/admin/pendingPaymentsCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function acceptedPaymentsCount() {
  
    return await http.get('/admin/acceptedgPaymentsCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }

  export async function pendingMelaPlanRequest() {
  
    return await http.get('/admin/pendingMealPlanRequestCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function adminProfile() {
  
    return await http.get('/admin/me',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function pendingWorkOutPlanCount() {
  
    return await http.get('/admin/pendingWorkOutPlanRequestCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  }
  export async function uploadedMealPlanCount() {
  
    return await http.get('/admin/uploadedMealPlanCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  };
  export async function uploadedWorkOutPlanCount() {
  
    return await http.get('/admin/uploadedWorkOutPlanCount',{
      headers: {
       
        'content-type': 'application/json',
        'x-auth-token':getJwt()
      }
    });
  };