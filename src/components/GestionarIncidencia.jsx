import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import TiposIncidencias from './TiposIncidencias';
import Reloj from './Reloj';

export default function GestionarIncidencia() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoIncidencia, setTipoIncidencia] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/incidencia', {
        titulo,
        descripcion,
        tipoIncidencia,
      });
      // console.log(response)
      setSuccess(true);
      setTitulo('');
      setDescripcion('');
      setTipoIncidencia('');
      navigate('/incidencias');
    } catch (error) {
      // console.error(error)
      setError('Error al crear la incidencia');
    }
  };

  const tiposIncidencia = [
    'Mantenimiento General',
    'Limpieza y Saneamiento',
    'Seguridad',
    'Áreas Comunes',
    'Administrativo',
    'Espacios Verdes y Jardinería',
  ];


  return (
    <div>
      <Navbar />
      <h1 className='play-font py-6 pl-[4rem] bg-[#225563] text-[#FBD05C] text-[25px]'>Gestionar nueva incidencia</h1>
      {/* <Incidencias/> */}
      <div className='play-font text-[#032536] px-[4rem] py-[2rem] bg-[#f4f0f1]'>
        <div className='flex justify-between w-full gap-[2rem]'>
          <div className='bg-[#F5F7FA] px-[2rem] rounded-lg'>
            <div className='flex justify-between items-center text-[20px] py-4 w-full'>
              <h2 className='text-[24px]'>Crear Incidencia</h2>
              <span><Reloj /></span>
            </div>
            <form onSubmit={handleSubmit}>
              <p className='text-[14px]'>A continuación, bríndenos más detalles sobre la incidencia que desea reportar: </p>
              <h4 className='mt-[1rem] font-semibold text-[17px]'>Título:</h4>
              <label className='w-[75%] flex h-[50px] items-center border-b-4 rounded-lg'>
                <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)}
                  className='w-full h-full rounded-lg px-[1rem] text-[14px] focus:outline-none m-0 p-0' placeholder='Proporcione un breve título que describa la incidencia.' />
              </label>

              <h4 className='mt-[1rem] font-semibold text-[17px]'>Descripción:</h4>
              <label className='w-[75%] flex h-[120px] items-center border-b-4 rounded-lg'>
                <textarea value={descripcion} onChange={(event) => setDescripcion(event.target.value)}
                  className='w-full h-full rounded-lg px-[1rem] py-[.5rem] text-[14px] focus:outline-none m-0 p-0' placeholder='Describa detalladamente el problema que está experimentando.' />
              </label>

              <h4 className='mt-[1rem] font-semibold text-[17px]'>Tipo de Incidencia:</h4>
              <p className='text-[13px] pb-[.7rem]'>Seleccione la categoría que mejor describa la naturaleza del problema, puede tomar en consideracion la tabla a la derecha para detallar mejor el tipo de incidencia a reportar</p>
              <label className='w-[75%] flex h-[50px] items-center border-b-4 rounded-lg'>
                <select value={tipoIncidencia} onChange={(event) => setTipoIncidencia(event.target.value)}
                  className='w-full h-full rounded-lg focus:outline-none m-0 p-0'>
                  <option value="">Seleccione un tipo de incidencia</option>
                  {tiposIncidencia.map((tipo, index) => (
                    <option key={index} value={tipo}
                      className=''>{tipo}</option>
                  ))}
                </select>
              </label>

              <div className='w-full flex items-center justify-center mt-[3rem] py-[1rem]'>
                <button type="submit" className='bg-[#225563] text-[#FBD05C] px-[3rem] py-[.8rem] rounded-lg text-[22px]
                button-hover'>Crear Incidencia</button>
              </div>
            </form>
            {success && <div style={{ color: 'green' }}>Incidencia creada con éxito</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </div>
          <div>
            <TiposIncidencias />
          </div>
        </div>
      </div>
    </div>
  )
}
