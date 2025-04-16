import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './compoents/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from "./pages/Profile";
import CollectionPage from './pages/CollectionPage';
import ProductsDetails from './compoents/Products/ProductsDetails';
import CheckOut from './compoents/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDeatilsPage from './pages/OrderDeatilsPage';
import MyOrdersPage from './pages/MyOrdersPage';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductsDetails />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="order/:id" element={<OrderDeatilsPage />} />
          <Route path="my-orders" element={<MyOrdersPage/>} />



        </Route>
      </Routes>
    </BrowserRouter >
  );
}
