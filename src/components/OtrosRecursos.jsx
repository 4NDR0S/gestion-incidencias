import React from 'react'

export default function OtrosRecursos() {
    return (
        <div className='p-[1rem] mt-[1rem]'>
            <h2 className='text-[18px] text-center'>Otros Recursos</h2>
            <div className='flex justify-between items-center px-[1.5rem] py-[.5rem]'>
                <img src="/notas.png" alt="" className='bg-[#032536] p-[.4rem] rounded-lg h-[70px] cursor-pointer button-hover' />
                <img src="/ingenieria.png" alt="" className='bg-[#032536] p-[.4rem] rounded-lg h-[70px] cursor-pointer button-hover' />
            </div>
            <div className='flex justify-between items-center px-[1.5rem] py-[.5rem]'>
                <img src="/fabricacion.png" alt="" className='bg-[#032536] p-[.4rem] rounded-lg h-[70px] cursor-pointer button-hover' />
                <img src="/robot-medico.png" alt="" className='bg-[#032536] p-[.4rem] rounded-lg h-[70px] cursor-pointer button-hover' />
            </div>
        </div>
    )
}
