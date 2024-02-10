import React from 'react'
import { Navigate } from 'react-router-dom';

const Contact = () => {
  const handle = (e) => {
    e.preventDefault();
    alert('💜');
  }
  return (
    <>
      <div className='h-full flex max-sm:block'>
        <div className='w-full left'>
          <div className='w-full flex justify-end pt-36 pb-12 max-sm:pt-3 max-sm:justify-center max-sm:pb-4'>
            <div className='bg-gray-300 shadow-md shadow-black w-fit h-fit p-5 rounded-md mr-4 max-sm:mx-2'>
              <h1 className='text-2xl font-semibold text-center'>Get in Touch:</h1>
              <p className='font-medium text-center mb-3'>Fill in the form to start Conversation</p>

              <p className='font-sans py-1'>🗺️ Lorem ipsum dolor sit amet consectetur.</p>
              <p className='py-1'>📱 +91 8123456789</p>
              <p className='py-1'>📧 infotech@santosh.com</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='w-full'>
          <div className=' w-full pt-32 pb-12 max-sm:pt-4 max-sm:flex max-sm:justify-center '>
            <div className='bg-gray-300/80 shadow-md shadow-blue-400 w-[310px] h-fit p-5 rounded-md ml-4 text-center max-sm:mx-2'>
              <form onSubmit={handle}>
                <div className='py-3'>
                  <input className=' pl-2 w-full border border-black rounded-md h-10' type="text" placeholder='Full name' />
                </div>
                <div className='py-3'>
                  <input className='pl-2 w-full border border-black rounded-md h-10' type="text" placeholder='Email' />
                </div>
                <div className='py-3'>
                  <input className='pl-2 w-full border border-black rounded-md h-10' type="text" placeholder='Phone Number' />
                </div>
                <div>
                  <button className='bg-blue-400 px-4 py-1 rounded-md shadow-md shadow-black' type='submit'>submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact