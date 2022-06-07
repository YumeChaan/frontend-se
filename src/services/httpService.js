import axios from "axios";
import logger from "./logServices";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  if(error.response.status==601){
  toast.warning("Sorry, This service is unavailble, You have not payed monthly Fee yet.");
  
  }
   else if(error.response.status==403){
    toast.error("Access denied.");
  }
  else if(error.response.status==595){
    toast.error("Admin has not been aproved you yet");
  }

else{
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 600;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurrred.");
  }
 
}
  

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
