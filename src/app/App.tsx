import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/test'
import DashboardPage from '../pages/dashboard'
import RegisterPage from "../pages/register/RegisterPage"

const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <Routes>
        {/* <Route path="/dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute isPageLogin><TestPage /></PrivateRoute>} /> */}
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/login" element={<TestPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/register" element={<PrivateRoute isPageLogin><RegisterPage /></PrivateRoute>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
