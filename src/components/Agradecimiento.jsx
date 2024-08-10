import React from 'react'

export default function Agradecimiento() {
    return (
        <div className='flex gap-2 play-font items-center bg-[#FBD05C] p-[1rem] rounded-lg'>

            <div className='h-[120px] w-[200px]'>
                <img src="/servicio-cliente.png" alt=""
                    className='h-[120px] w-[200px]' />
            </div>
            <div className='w-[300px] h-full text-[11px] text-[#032536]'>
                <p>¡Gracias por utilizar nuestra plataforma de gestiones!

                    Apreciamos sinceramente tu confianza en nuestros servicios. Nuestro objetivo es brindarte la mejor experiencia posible y estamos aquí para ayudarte en todo momento.

                    Si tienes alguna incidencia o reporte, no dudes en comunicarte con nosotros a través de la plataforma. Estamos gustosos de atenderte y resolver cualquier inconveniente que puedas tener.

                    ¡Gracias por ser parte de nuestra comunidad!</p>
            </div>

        </div>
    )
}
