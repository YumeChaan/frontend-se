import React from 'react';
import AppRouter from './Router';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <React.Fragment>
      <ToastContainer/> 
    <AppRouter />
    </React.Fragment>
  );
}

export default App;
