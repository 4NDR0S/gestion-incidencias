// src/components/IncidenciasAdmin.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import Navbar from './Navbar';
import Reloj from './Reloj';

import Swal from 'sweetalert2';

export default function Incidencias() {
    const [incidencias, setIncidencias] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    //para la alerta
    // const [showAlert, setShowAlert] = useState(false);
    // if (showAlert) {
    //     return <Alerta />;
    //   }

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
            <h1 className='play-font py-6 pl-[4rem] bg-[#225563] text-[#FBD05C] text-[25px]'>Incidencias reportadas</h1>
            <div className='play-font text-[#032536] px-[4rem] py-[1rem] bg-[#f4f0f1]'>
                {/* <h2>Mis incidencias</h2>
                <ul>
                    {incidencias.map((incidencia, index) => (
                        <li key={index}><span>{incidencia.estado}</span> - {incidencia.titulo_incidencia} - {incidencia.descripcion} - {incidencia.fecha_incidencia}</li>
                    ))}
                </ul> */}

                <div className='flex justify-between text-[20px] py-4'>
                    <h2 className='text-[24px]'>Todas las incidencias reportadas</h2>
                    <span><Reloj /></span>
                </div>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className='text-left text-[18px]'>
                            <th className="py-4 px-2 border-b border-gray-300"></th>
                            <th className="py-4 px-4 border-b border-gray-300">Estado</th>
                            <th className="py-4 px-4 border-b border-gray-300">Título</th>
                            <th className="py-4 px-4 border-b border-gray-300">Tipo</th>
                            <th className="py-4 px-4 border-b border-gray-300">Descripción</th>
                            <th className="py-4 px-4 border-b border-gray-300">Fecha</th>
                            <th className="py-4 px-4 border-b border-gray-300">ID Res.</th>
                            <th className="py-4 px-4 border-b border-gray-300"></th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {incidencias.map((incidencia, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="py-3 px-2"> <div className='flex items-center justify-center w-full'>
                                    <div className={`w-[20px] h-[20px] rounded-full ${getColor(incidencia.estado)}`}></div>
                                </div></td>
                                <td className="py-3 px-4 font-semibold">{incidencia.estado}</td>
                                <td className="py-3 px-4">{incidencia.titulo_incidencia}</td>
                                <td className="py-3 px-4 font-semibold">{incidencia.tipo_incidencia}</td>
                                <td className="py-3 px-4">{incidencia.descripcion}</td>
                                <td className="py-3 px-4">{formatearFecha(incidencia.fecha_incidencia)}</td>
                                <td className="py-3 px-4">{incidencia.id_usuario}</td>
                            </tr>
                        ))}
                    </tbody> */}
                    <tbody>
                        {incidencias.map((incidencia, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="py-3 px-2">
                                    <div className='flex items-center justify-center w-full'>
                                        <div className={`w-[20px] h-[20px] rounded-full ${getColor(incidencia.estado)}`}></div>
                                    </div>
                                </td>
                                <td className="py-3 px-4 font-semibold">
                                    <select
                                        value={incidencia.estado}
                                        onChange={(e) => {
                                            // Store the new state in a temporary variable
                                            const newState = e.target.value;
                                            // Update the incidence state in the local state
                                            setIncidencias((prevIncidencias) =>
                                                prevIncidencias.map((i) =>
                                                    i.id_incidencia === incidencia.id_incidencia ? { ...i, estado: newState } : i
                                                )
                                            );
                                        }}
                                    >
                                        <option value="emitida">Emitida</option>
                                        <option value="en_proceso">En proceso</option>
                                        <option value="resuelta">Resuelta</option>
                                        <option value="cerrada">Cerrada</option>
                                    </select>
                                </td>
                                <td className="py-3 px-4">{incidencia.titulo_incidencia}</td>
                                <td className="py-3 px-4 font-semibold">{incidencia.tipo_incidencia}</td>
                                <td className="py-3 px-4">{incidencia.descripcion}</td>
                                <td className="py-3 px-4">{formatearFecha(incidencia.fecha_incidencia)}</td>
                                <td className="py-3 px-4">{incidencia.id_usuario}</td>
                                <td className="py-3 px-4">
                                    <button
                                        className='button-hover bg-[#225563] px-[.7rem] py-[.3rem] rounded-lg text-[#FBD05C]'
                                        onClick={async () => {
                                            try {
                                                // envia una peticion PUT al back-end actualizando el estado
                                                const response = await axios.put('/incidencia/actualizar/estado', {
                                                    idIncidencia: incidencia.id_incidencia,
                                                    nuevoEstado: incidencia.estado,
                                                });
                                                if (response.status === 200) {
                                                    Swal.fire({
                                                        position: "top-center",
                                                        icon: "success",
                                                        title: "Estado de la incidencia actualizado con éxito",
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    });
                                                } else {
                                                    Swal.fire({
                                                        position: "top-center",
                                                        icon: "error",
                                                        title: "Error al actualizar el estado de la incidencia",
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    });
                                                }
                                            } catch (error) {
                                                console.error('Error al actualizar el estado de la incidencia:', error);
                                                Swal.fire({
                                                    position: "top-center",
                                                    icon: "error",
                                                    title: "Error al actualizar el estado de la incidencia",
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                });
                                            }
                                        }}
                                    >
                                        Actualizar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
};
