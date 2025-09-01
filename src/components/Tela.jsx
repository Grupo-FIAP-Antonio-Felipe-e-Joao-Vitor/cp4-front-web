import React from 'react'

const Tela = ({ resultado }) => {
  return (
    <div className='bg-black flex justify-end pt-1 pb-1 pr-3'>
        <span className='text-white text-3xl'>
            { resultado }
        </span>
    </div>
  )
}

export default Tela