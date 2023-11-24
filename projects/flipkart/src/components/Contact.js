import React from 'react'

const Contact = () => {
  return (
    <div className='h-[90vh]'>
        <h1 className='font-bold text-3xl my-2 text-center'>Contact</h1>
        <form className='my-5 flex flex-col w-4/12 gap-4 p-8 bg-indigo-200 mx-auto rounded-lg'>
          <input type='text' placeholder='Name' className='px-4 py-2 rounded-lg'/>
          <input type='text' placeholder='Message' className='px-4 py-2 rounded-lg'/>
          <button className='px-4 py-2 bg-green-500 text-white rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Contact