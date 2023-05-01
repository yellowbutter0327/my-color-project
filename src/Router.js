import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SearchItem from 'pages/SearchItem/SearchItem';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import PersonalColor from './pages/PersonalColor/PersonalColor';
import Cart from 'pages/Cart/Cart';
import Register from './pages/Register/Register';
import Terms from './pages/Register/Component/Terms';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import store from './store/store.js';
import PageNotFound from 'pages/404/PageNotFound';

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchItem />} />
          <Route path="/order" element={<Order />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/personalcolor" element={<PersonalColor />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/terms" element={<Terms />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
export default Router;
