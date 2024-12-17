import React from 'react'

import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux'

import store from './redux/store'

import ProtectedRoute from './components/ProtectedRoute';

import Home from './Pages/Home'

import ProductDetailsView from './Pages/ProductDetailsView'

import CartSection from './Pages/CartSection'

import User from './Pages/User'

import NotFound from './Pages/NotFound'

import LoginSection from './Pages/LoginSection'



const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginSection />} />
      <Route path="/" element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
        } />
      <Route path="/product-details/:id" element={
        <ProtectedRoute>
        <ProductDetailsView />
        </ProtectedRoute>
        } />
      <Route path='/cart' element={
        <ProtectedRoute>
        <CartSection />
        </ProtectedRoute>
        } />
      <Route path="/user" element={
        <ProtectedRoute>
        <User/>
        </ProtectedRoute>
        }/>
        
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


