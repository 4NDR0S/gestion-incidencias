import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Register from './Register'
import Usuarios from './Usuarios'
import Reloj from './Reloj'
import OtrosRecursos from './OtrosRecursos'


export default function Administracion() {
  return (
    <div>
      <Navbar />
      <h1 className='play-font py-6 pl-[4rem] bg-[#225563] text-[#FBD05C] text-[25px]'>Gestion Administrativa</h1>
      <div className='play-font text-[#032536] px-[4rem] py-[2rem] bg-[#f4f0f1]'>

        <div className='flex gap-[2rem] justify-between'>
          <div>
            <h2 className='text-[20px] mb-[1rem]'>Registrar nuevo Residente</h2>
            <Register />
            <div>
              <OtrosRecursos/>
            </div>
          </div>
          <div>
            <h2 className='text-[20px] mb-[1rem]'>Lista de Residentes</h2>
            <Usuarios />
          </div>

          <div>
            <div className='flex justify-between text-[20px] mb-[1rem]'>
              <h2>Control</h2>
              <Reloj />
            </div>
      
            <div className='flex w-full gap-[1rem]'>
              <div className='w-[400px]'>
                <img src="/cam-1.jpeg" alt=""
                  className='w-full h-[250px] mb-[1rem] p-[.3rem] bg-[#032536] rounded-md' />
                <img src="/cam-2.jpeg" alt=""
                  className='w-full h-[250px] mb-[1rem] p-[.3rem] bg-[#032536] rounded-md' />
              </div>

              <div className='w-[400px]'>
              <img src="/cam-3.jpeg" alt=""
                className='w-full h-[250px] mb-[1rem] p-[.3rem] bg-[#032536] rounded-md' />
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
