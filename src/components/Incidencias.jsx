// src/components/Incidencias.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import Navbar from './Navbar';
import Reloj from './Reloj';
import Agradecimiento from './Agradecimiento';

export default function Incidencias() {
    const [incidencias, setIncidencias] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get('/me');
                setIsAdmin(userResponse.data.rol === 'admin');

                const incidenciasResponse = isAdmin
                    ? await axios.get('/all-incidencias')
                    : await axios.get('/incidencias');

                setIncidencias(incidenciasResponse.data);
            } catch (error) {
                alert('Error al obtener las incidencias');
            }
        };

        fetchData();
    }, [isAdmin]);


    //obtener el color dependiendo del estado de la incidencia
    const getColor = (estado) => {
        switch (estado) {
            case 'emitida':
                return 'bg-yellow-400';
            case 'en_proceso':
                return 'bg-orange-400';
            case 'resuelta':
                return 'bg-green-400';
            case 'cerrada':
                return 'bg-red-600';
            default:
                return 'bg-slate-500';
        }
    }


    function formatearFecha(fechaOriginal) {
        const fecha = new Date(fechaOriginal);
        const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
        const mes = meses[fecha.getMonth()];
        return `${fecha.getDate()} - ${mes} - ${fecha.getFullYear()}`;
      }


    return (
        <div>
            <Navbar />
            <h1 className='play-font py-6 pl-[4rem] bg-[#225563] text-[#FBD05C] text-[25px]'>Incidencias</h1>
            <div className='play-font text-[#032536] px-[4rem] py-[1rem] bg-[#f4f0f1]'>
                {/* <h2>Mis incidencias</h2>
                <ul>
                    {incidencias.map((incidencia, index) => (
                        <li key={index}><span>{incidencia.estado}</span> - {incidencia.titulo_incidencia} - {incidencia.descripcion} - {incidencia.fecha_incidencia}</li>
                    ))}
                </ul> */}

                <div className='flex justify-between text-[20px] py-4'>
                    <h2 className='text-[24px]'>Mis incidencias</h2>
                    <span><Reloj /></span>
                </div>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className='text-left text-[18px]'>
                            <th className="py-4 px-2 border-b border-gray-300"></th>
                            <th className="py-4 px-4 border-b border-gray-300">Estado</th>
                            <th className="py-4 px-4 border-b border-gray-300">Título</th>
                            <th className="py-4 px-4 border-b border-gray-300">Descripción</th>
                            <th className="py-4 px-4 border-b border-gray-300">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incidencias.map((incidencia, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="py-3 px-2"> <div className='flex items-center justify-center w-full'>
                                    <div className={`w-[20px] h-[20px] rounded-full ${getColor(incidencia.estado)}`}></div>
                                </div></td>
                                <td className="py-3 px-4 font-semibold">{incidencia.estado}</td>
                                <td className="py-3 px-4">{incidencia.titulo_incidencia}</td>
                                <td className="py-3 px-4">{incidencia.descripcion}</td>
                                <td className="py-3 px-4">{formatearFecha(incidencia.fecha_incidencia)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='px-[4rem] flex items-end justify-end mt-[4rem]'>
            <Agradecimiento />
            </div>
            
            
        </div>
    );
};