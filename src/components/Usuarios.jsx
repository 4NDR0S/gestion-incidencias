// src/components/Usuarios.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/all-users');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsuarios = usuarios.filter((usuario) => {
    const searchTermLowercase = searchTerm.toLowerCase();
    return (
      usuario.name.toLowerCase().includes(searchTermLowercase) ||
      usuario.id_usuario.toString().includes(searchTermLowercase) ||
      usuario.apartamento.toLowerCase().includes(searchTermLowercase)
    );
  });

  return (
    <div>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar por nombre, ID o apartamento"
        className='w-full h-[40px] placeholder:px-[1rem] rounded-lg'
      />
      <table className="min-w-full bg-white border border-gray-300 mt-[1rem]">
        <thead>
        <tr className='text-left text-[18px]'>
            <th className="py-4 px-4 border-b border-gray-300">ID</th>
            <th className="py-4 px-4 border-b border-gray-300">Usuario</th>
            <th className="py-4 px-4 border-b border-gray-300">Nombre</th>
            <th className="py-4 px-4 border-b border-gray-300">Apartamento</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsuarios.map((usuario, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="py-3 px-4">{usuario.id_usuario}</td>
              <td className="py-3 px-4">{usuario.user}</td>
              <td className="py-3 px-4">{usuario.name}</td>
              <td className="py-3 px-4">{usuario.apartamento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}