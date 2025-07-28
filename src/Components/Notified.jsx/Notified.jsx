import React from 'react'

const Notified = () => {
  return (
    <div className='bg-slate-900 h-[500px] flex flex-col items-center justify-center px-4'>
      
      <h1 className='text-3xl sm:text-5xl text-white text-center mb-8'>
        Get Notified About New Products
      </h1>

     
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <input
          type="text"
          placeholder="Enter your Name"
          className="bg-white p-3 rounded shadow"
        />
        <input
          type="email"
          placeholder="Enter your Gmail"
          className="bg-white p-3 rounded shadow"
        />
      </div>
 <button className='bg-green-600 text-white rounded-md mt-5 py-2 px-5 hover:bg-green-400'>Submit</button>
    </div>
  )
}

export default Notified
