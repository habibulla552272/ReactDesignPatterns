'use client'
import React, { useState } from 'react'
import Modal from './Modal'

const ShowModel = () => {

  const [isOpen, setisOpen] = useState(false);



  return (
    <div className='container mx-auto flex justify-center items-center'>
         <button
        onClick={() => setisOpen(true)}
        className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
      >
        Show Your Modal
      </button>
        <Modal  isOpen={isOpen} setisOpen={setisOpen} >
        <Modal.Header>
            <h2>Hello</h2>
        </Modal.Header>
        <Modal.Body>
            <p>lorem20</p>
        </Modal.Body>
        <Modal.Footer>
            <button>
                Nice 
            </button>
        </Modal.Footer>

        </Modal>
      
    </div>
  )
}

export default ShowModel
