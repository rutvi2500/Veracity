import React, { useState } from 'react';
import Chatbot from 'react-simple-chatbot';

import {steps} from './steps';

const Boat = () => {
  const [show, setShow] = useState(false)
  console.log(show)
  return (
    <>
      <div style={{display: show ? 'flex' : 'none'}}>
        <Chatbot steps={steps} />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-8" >

      <div 
        onClick={() => setShow(!show)} 
        className="transition duration-500 ease transform\
         hover:-translate-y-1 inline-block bg-blue-600 text-lg\
         rounded-full text-white px-4 py-3 cursor-pointer"
      >
        Get a quick solution of your questions
      </div>
      </div>
    </>
  )
}

export default Boat