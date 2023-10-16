import {BrowserRouter, Routes, Route, Link, useHistory} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import CreateProduct from './components/CreateProduct'; 
import EditProduct from './components/EditProduct'; 
import ListProduct from './components/ListProduct'; 
import { useEffect, useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);

  const logout = () => {
    localStorage.setItem('token', null);
    setAuth(false)
  }
  return (
    <div className="App">
      <h5>React Login and CRUD operations using PHP API and MySQL</h5>

      <BrowserRouter>
        {}
        <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
          <Route path="user/list" element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
          <Route path="product" element={<ListProduct />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
