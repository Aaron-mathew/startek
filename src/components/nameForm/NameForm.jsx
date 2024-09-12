import React from 'react'

const NameForm = () => {
  return (
    <div className='relative'>
        <div className='h-screen w-full flex justify-center items-center p-40'>
          <div className='h-3/4 -translate-y-5 w-[47vw] relative '>
            <img className='absolute w-full' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a7e6428bb6f9b3ce05b1_Vector%209.svg" alt="" />
            <div className='relative'>
              <form>
                <div className='h-[40vh] flex flex-col justify-center items-center w-full'>
                  <h3 className='text-lg text-white font-medium'>WELCOME TO THE GALACTIC PORT, CAPTAIN</h3>
                  <input className='pt-1 pb-3 px-5 text-center outline-none bg-transparent text-white placeholder:text-white border-[1px] mt-5 text-6xl w-4/6' type="text" placeholder='Enter your name'/>
                </div>
                <div className='absolute bottom-0 right-0'>
                  <button className='px-10 py-5 text-xl font-medium bg-white -bottom-20'>Start the journey</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NameForm