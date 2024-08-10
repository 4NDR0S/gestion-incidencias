// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Incidencias from './components/Incidencias';

import GestionarIncidencia from './components/GestionarIncidencia';
import { UserProvider } from './UserContext';
import IncidenciasAdmin from './components/IncidenciasAdmin';
import Administracion from './components/Administracion';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    
                    <Route path="/administracion" element={<Administracion/>} />
                    <Route path="/incidencias-admin" element={<IncidenciasAdmin/>} />
                    <Route path="/incidencias" element={<Incidencias />} />
                    <Route path="/gestionar-incidencia" element={<GestionarIncidencia />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
