import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function Reloj() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, []);

    const formatTime = (date) => {
        return format(date, 'h:mm a - dd/MM/yyyy');
    };

  return (
    <span>{formatTime(currentTime)}</span>
  )
}
