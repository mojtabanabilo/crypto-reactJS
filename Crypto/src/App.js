import React, { useState } from 'react';
import { Provider } from "react-redux";
import { Routes , Route, Navigate } from "react-router-dom";

// store
import store from './components/redux/store';

// style
import "./App.css";

// components
import Login from './components/login/Login';
import Render from './components/Render/Render';
import Details from './components/details/Details';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Render />}/>
          <Route path='/signup' element={<Login />}/>
          <Route path='/*' element={<Navigate to='/'/>}/>
          <Route path='/:id' element={<Details />}/>
        </Routes>
      </Provider>
    </>
  );
};

export default App;