import React, { useState } from 'react';
import axios from '../axiosConfig';

import Swal from 'sweetalert2';

export default function Register() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [apartamento, setApartamento] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', { user, password, name, apartamento });
            alert('Usuario registrado exitosamente');
            setUser(''); // Borrar el valor de user
            setPassword(''); // Borrar el valor de password
            setName(''); // Borrar el valor de name
            setApartamento(''); // Borrar el valor de apartamento
        } catch (error) {
            // alert('Error al registrar usuario');
        }
    };
    return (
        <div className='login-button p-[.5rem] w-[250px] flex items-center justify-center rounded-lg bg-opacity-85'>
            <div className='text-[#032536] bg-black bg-opacity-15 p-[.5rem] w-[250px] rounded-lg'>
                <form onSubmit={handleRegister}>
                    <div className='m-1 mb-3 h-[45px] flex justify-center items-center bg-black bg-opacity-25 rounded-lg'>
                        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="user"
                            className='px-2 bg-transparent w-full h-full focus:outline-none m-0 p-0 placeholder-[#F5F7FA] text-[#F5F7FA]' />
                    </div>

                    <div className='m-1 mb-3 h-[45px] flex justify-center items-center bg-black bg-opacity-25 rounded-lg'>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
                            className='px-2 bg-transparent w-full h-full focus:outline-none m-0 p-0 placeholder-[#F5F7FA] text-[#F5F7FA]' />
                    </div>

                    <div className='m-1 mb-3 h-[45px] flex justify-center items-center bg-black bg-opacity-25 rounded-lg'>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"
                            className='px-2 bg-transparent w-full h-full focus:outline-none m-0 p-0 placeholder-[#F5F7FA] text-[#F5F7FA]' />
                    </div>

                    <div className='m-1 mb-3 h-[45px] flex justify-center items-center bg-black bg-opacity-25 rounded-lg'>
                        <input type="text" value={apartamento} onChange={(e) => setApartamento(e.target.value)} placeholder="Aapartamento"
                            className='px-2 bg-transparent w-full h-full focus:outline-none m-0 p-0 placeholder-[#F5F7FA] text-[#F5F7FA]' />
                    </div>


                    <div className='button-hover bg-[#032536] m-1 h-[35px] rounded-lg'>
                        <button type="submit" className=' w-full h-full text-[#FBD05C]'
                        onClick={async () => {
                            try {
                                if (response.status === 200) {
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "success",
                                        title: "Residente registrado con éxito",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                } else {
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "error",
                                        title: "Error al registrar residente",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            } catch (error) {
                                console.error('Error al registrar residente:', error);
                                Swal.fire({
                                    position: "top-center",
                                    icon: "error",
                                    title: "Error al registrar residente",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        }}>Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
