import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/test'
import DashboardPage from '../pages/dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <Routes>
        <Route path="/" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute isPageLogin><TestPage /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
