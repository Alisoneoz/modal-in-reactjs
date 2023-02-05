import React from 'react'
import "./modal.css"
const Modal = ({ closeModal }) => {
  return (
    <div className='modal-bg flex items-center justify-center h-screen w-screen'>
      <div className="modal-container bg-green-100 flex justify-center items-center">
        <h2 className='p-2 h-1/2 '>Hey I'm the modal</h2>
        <button onClick={()=>{closeModal(false)}} className="button">x</button>
      </div>

    </div>
  )
}

export default Modal