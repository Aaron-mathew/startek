import React, { useState } from 'react'

const NameForm = (props) => {
  const [userInput, setUserInput] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    props.setUsername(userInput)

    // setTimeout(function(){
    localStorage.setItem('user', userInput)
    // },2000)

  }
  return (
    <div className='relative h-screen w-screen p-4 bg-[#F4F9FB]'>
      <div className='fixed h-full w-full bg-[#E5E9EC] overflow-hidden rounded-3xl'>
        <img className='h-full w-full object-cover' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601b7d63c31da7e5be13f14_Frame%201815%20copy-min%20(1).webp" alt="" />
      </div>

      <div className='h-screen w-full flex justify-center items-center p-40'>
        <div className='h-3/4 -translate-y-5 w-[47vw] relative '>
          <img className='absolute w-full' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a7e6428bb6f9b3ce05b1_Vector%209.svg" alt="" />
          <div className='relative'>
            <form onSubmit={(e) => {
              submitHandler(e)
            }}>
              <div className='h-[40vh] flex flex-col justify-center items-center w-full'>
                <h3 className='text-lg text-white font-medium'>WELCOME TO THE GALACTIC PORT, CAPTAIN</h3>
                <input value={userInput} onChange={(e) => { setUserInput(e.target.value) }} className='pt-1 pb-3 px-5 text-center outline-none bg-transparent text-white placeholder:text-white border-[1px] mt-5 text-6xl w-4/6' type="text" placeholder='Enter your name' />
              </div>
              <div className='absolute -bottom-10 -right-20'>
                <button className='px-7 py-3 hover:text-white rounded-lg hover:bg-sky-800 text-lg font-medium bg-white'>START THE JOURNEY</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NameForm

