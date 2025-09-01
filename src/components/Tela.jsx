import React from 'react'

const Tela = ({ resultado }) => {
  return (
    <div className='bg-black flex justify-end pt-1 pb-1 pr-3 border-2 border-white rounded-2xl'>
        <span className='text-white text-3xl'>
            { resultado }
        </span>
    </div>
  )
}

export default Tela