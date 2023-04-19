import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import PersonalColor from './pages/PersonalColor/PersonalColor';
import Register from './pages/Register/Register';
import Terms from './pages/Register/Component/Terms';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import PageNotFound from 'pages/404/PageNotFound';
function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/personalcolor" element={<PersonalColor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/terms" element={<Terms />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
