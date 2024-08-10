// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Navbar() {
    const { user, logout } = useContext(UserContext);
    const location = useLocation();

    return (
        <nav className='w-full bg-[#032536] flex justify-between px-[4rem]'>
            <div className='flex'>
                <div className='py-4 flex justify-between gap-4 items-center mr-24'>
                    <img src="/public/edificio-logo2.png" alt="" className='h-[50px]' />
                    <h1 className='orbitron text-[35px] text-[#F5F7FA]'>AXVE</h1>
                </div>
                <ul className='flex justify-between gap-6 items-center text-[#F5F7FA] play-font h-full'>
                    {user && user.rol === 'admin' ? (
                        <>

                            <li
                                className={`text-[25px] hover:text-[#F43F1E] ${location.pathname === '/administracion' ? 'text-[#FBD05C]' : ''
                                    }`}
                            >
                                <Link to="/administracion">Administracion</Link>
                            </li>
                            <li
                                className={`text-[25px] hover:text-[#F43F1E] ${location.pathname === '/incidencias-admin' ? 'text-[#FBD05C]' : ''
                                    }`}

                            >
                                <Link to="/incidencias-admin">Tareas</Link>
                            </li>

                        </>
                    ) : (
                        <>
                            <li
                                className={`text-[25px] hover:text-[#F43F1E] ${location.pathname === '/incidencias' ? 'text-[#FBD05C]' : ''
                                    }`}
                            >
                                <Link to="/incidencias">Inicio</Link>
                            </li>
                            <li
                                className={`text-[25px] hover:text-[#F43F1E] ${location.pathname === '/gestionar-incidencia' ? 'text-[#FBD05C]' : ''
                                    }`}
                            >
                                <Link to="/gestionar-incidencia">Gestionar Incidencia</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <div className='play-font flex items-center gap-[1.5rem]'>
                <h4 className='text-[20px] text-[#F5F7FA]'>{user.name}</h4>
                <img src="/user-profile-icon.png" alt="" className='h-[40px]' />
                <Link to="/">
                    <button
                        className='login-button button-hover text-[#F5F7FA] px-4 py-2 flex gap-2 items-center rounded-md transform: scale(5)'
                        onClick={logout}
                    >
                        Logout
                        <img src="/cerrar-sesion-icon.png" alt="" className='h-[20px]' />
                    </button>
                </Link>

            </div>
        </nav>
    );
}