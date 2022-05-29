import React from 'react';
import AppRouter from './Router';
import RegisterNavBar from './Components/RegisterNavBar';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <React.Fragment>
      <ToastContainer/>
      <RegisterNavBar/>
    <AppRouter />
    </React.Fragment>
      
   
    
  );
}

export default App;
