import React from 'react'

const Botao = ({ label , funcao}) => {
  return (
    <button onClick={funcao} className='cursor-pointer bg-gray-600 text-white p-2 text-center h-10 w-10 rounded-full hover:bg-white hover:text-gray-600 transition-colors duration-300'>{ label }</button>
  )
}

export default Botao