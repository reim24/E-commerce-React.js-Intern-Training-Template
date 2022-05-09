import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestPage from '../pages/test'
import DashboardPage from '../pages/dashboard'
import ProductDetails from '../pages/dashboard/productDetails/ProductDetail'
import Cart from '../pages/cart/cart'
import Register from '../pages/register/Register'
import Profile from '../pages/profile/profile'
import Categories from "../pages/categories/categories"
import Category from "../pages/categories/category"

const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <Routes>
        <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/:id" element={<PrivateRoute><ProductDetails /> </PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/categories" element={<PrivateRoute><Categories /></PrivateRoute>} />
        <Route path="/categories/:id" element={<PrivateRoute><Category /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute isPageLogin><TestPage /></PrivateRoute>} />
        <Route path="/register" element={<PrivateRoute isPageLogin><Register /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
