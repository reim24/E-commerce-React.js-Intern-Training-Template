import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/login/LoginPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import RegisterPage from "../pages/register/RegisterPage"
import { useStore } from "../main/Zustand/store"
import { useEffect } from 'react';

const App = () => {

  const { setUser } = useStore()

  function validateUser() {

    if (localStorage.token) {

      fetch(`http://reimusabelli-001-site1.itempurl.com/api/authentication/validate-token?token=${localStorage.token}`)
        .then((resp) => resp.json())
        .then((data) => {

          if (data.error) {
            console.log("Validation failed.");
          } 
          
          else {
            setUser(data);
          }

      });

    }

  }

  useEffect(() => {
        validateUser();
  }, []);

  return (

      <Routes>

        <Route index element={<Navigate replace to="/login" />} />

        <Route path="*" element={
          //@ts-ignore
          <DashboardPage />} 
        />

        {/* @ts-ignore */}
        <Route path="/dashboard" element={<DashboardPage  />} />
        
        {/* @ts-ignore */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* @ts-ignore */}
        <Route path="/register" element={<RegisterPage />} />
      
      </Routes>

  );

};

export default App;