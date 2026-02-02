import React from 'react'
interface modalProps{
    isOpen:boolean;
    setisOpen:(value:boolean)=>void;
    tittle:string;
    body:string;
    primaryAction:string;
    secondaryAction:string;
    
}

const Model = ({ isOpen,setisOpen,tittle,body,primaryAction,secondaryAction}:modalProps) => {
    if(!isOpen){
        return;
    }
  return (
    <div className='container mx-auto max-w-md flex items-center justify-center z-50  shadow-2xl p-5 rounded-2xl '>
        <div className='m'>
  <button onClick={()=>setisOpen(!isOpen)} className=' text-4xl cursor-pointer font-bold'>
        x
      </button>
      <h1>{tittle}</h1>
      <p>
        {body}
      </p>
      <div>

      <button>
        {primaryAction}

      </button>
      <button>
        {secondaryAction}
      </button>
      </div>
        </div>
    
    </div>
  )
}

export default Model
