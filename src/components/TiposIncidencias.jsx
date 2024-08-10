import React from 'react'

export default function TiposIncidencias() {
    return (
        <div className='play-font items-center bg-[#FBD05C] py-[1rem] px-[2rem] rounded-lg'>
            <h4 className='font-semibold text-[20px]'>Tipos de Incidencias</h4>
            <h5 className='font-semibold text-[16px] pt-4'>1. Mantenimiento General</h5>
            <ul className='text-[12px] list-disc pl-[2rem]'>
                <li>Reparación de fontanería (e.g., fuga de agua, ducha dañada)</li>
                <li>Problemas eléctricos (e.g., apagones, enchufes defectuosos)</li>
                <li>Mantenimiento de ascensores (e.g., averías, inspección rutinaria)</li>
                <li>Reparación de sistemas de calefacción/aire acondicionado</li>
            </ul>

            <h5 className='font-semibold text-[16px] pt-2'>2. Limpieza y Saneamiento</h5>
            <ul className='text-[12px] list-disc pl-[2rem]'>
                <li>Limpieza de áreas comunes (e.g., pasillos, escaleras)</li>
                <li>Manejo de basura y reciclaje (e.g., contenedores llenos, residuos acumulados)</li>
                <li>Problemas de plagas (e.g., infestación de insectos o roedores)</li>
            </ul>

            <h5 className='font-semibold text-[16px] pt-2'>3. Seguridad</h5>
            <ul className='text-[12px] list-disc pl-[2rem]'>
                <li>Problemas con el sistema de seguridad (e.g., cámaras, alarmas)</li>
                <li>Incidencias de acceso (e.g., llaves o tarjetas de acceso perdidas)</li>
                <li>Violaciones de seguridad (e.g., puertas de emergencia bloqueadas)</li>
            </ul>

            <h5 className='font-semibold text-[16px] pt-2'>4. Áreas Comunes</h5>
            <ul className='text-[12px] list-disc pl-[2rem]'>
                <li>Problemas en la piscina (e.g., limpieza, sistemas de filtración)</li>
                <li>Mantenimiento del gimnasio (e.g., equipos dañados)</li>
                <li>Incidencias en la sala de eventos (e.g., reservas, daños)</li>
            </ul>

            <h5 className='font-semibold text-[16px] pt-2'>5. Administrativo</h5>
            <ul className='text-[12px] list-disc pl-[2rem]'>
                <li>Problemas con las cuotas de mantenimiento</li>
                <li>Consultas o quejas de los residentes</li>
                <li>Solicitudes de documentos o permisos</li>
            </ul>

            <h5 className='font-semibold text-[16px] pt-2'>6. Espacios Verdes y Jardinería</h5>
            <ul className='text-[12px] list-disc pl-[2rem]'>
                <li>Mantenimiento de jardines (e.g., poda de árboles, césped)</li>
                <li>Problemas con el riego automático</li>
                <li>Plagas en plantas</li>
            </ul>
        </div>
    )
}
