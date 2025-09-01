import React from 'react'

const Botao = ({ label , funcao}) => {
  return (
    <button onClick={funcao}>{ label }</button>
  )
}

export default Botao