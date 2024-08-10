import React, { useState, useContext } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser: setUserContext } = useContext(UserContext);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { user, password });
            localStorage.setItem('token', response.data.token);

            const userResponse = await axios.get('/me');
            setUserContext(userResponse.data);

            const userRole = userResponse.data.rol;

            if (userRole === 'admin') {
                navigate('/administracion'); // or whatever route you want for admins
              } else {
                navigate('/incidencias');
              }

            // alert('Inicio de sesión exitoso');
        } catch (error) {
            alert('Error al iniciar sesión');
        }
    };

    return (
        <>
            <div className="relative h-screen">
                {/* background div */}
                <div className="custom-bg h-full w-full opacity-80 absolute top-0 left-0 z-0"></div>

                {/* content */}
                <div className="relative z-10 flex flex-col items-center h-full bg-transparent">
                    <div className="w-full bg-[#032536] flex items-center justify-center bg-opacity-80">
                        <div className="py-8 px-8 flex justify-between gap-4 items-center mr-24">
                            <img src="/public/edificio-logo2.png" alt="" className="h-[110px]" />
                            <h1 className="font-bold text-[75px] text-[#f5f7fa] orbitron">AXVE</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-[10%]">
                        <form onSubmit={handleLogin} className="block w-[350px]">
                            <div className="bg-[#032536] rounded-lg flex h-[60px] items-center my-[1rem] text-[#F5F7FA] text-[22px] bg-opacity-70">
                                <div className='flex justify-center w-[60px] mx-4'>
                                    <img src="/user-logo.png" alt=""
                                        className='h-[35px]' />
                                </div>
                                <input
                                    type="text"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    placeholder="Usuario"
                                    className="bg-transparent w-full h-full focus:outline-none m-0 p-0 placeholder-[#F5F7FA]"
                                />
                            </div>

                            <div className="bg-[#032536] rounded-lg flex h-[60px] items-center my-[1rem] text-[#F5F7FA] text-[22px] bg-opacity-70">
                                <div className='flex justify-center w-[60px] mx-4'>
                                    <img src="/llave-ingreso-logo.png" alt=""
                                        className='h-[40px]'/>
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="bg-transparent w-full h-full text-[#F5F7FA] focus:outline-none m-0 p-0 placeholder-[#F5F7FA]"
                                />
                            </div>

                            <div className="login-button button-hover rounded-lg flex h-[44px] items-center justify-center mt-12 text-[#032536]">
                                <button type="submit" className="h-full w-full text-[25px] font-bold">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
