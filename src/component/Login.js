import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

  const[isSignIn , setIsSignIn] = useState(true);

  const ToggleSignIn = ()=>{
    setIsSignIn(!isSignIn);
  };  
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg' alt='Netflix Login'>
        </img>
      </div>
      <div className='absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 bg-transparent'>
        <form className='flex flex-col w-3/12 relative p-12 bg-black text-white bg-opacity-80 mt-20'>
        <h1 className='font-bold text-3xl text-white'>
        {isSignIn ? 'Sign In' : 'Sign Up'}
          </h1>

          
         {!isSignIn && <input type='text text-white' placeholder='Full Name' className='p-4 my-4
          mt-10 mb-2 bg-gray-900 border-white'>
          </input>
          }

{!isSignIn &&  <input type='text text-white' placeholder='Email' className='p-4 my-4
          mt-10 mb-2 bg-gray-900 border-white'>
          </input>
}


{!isSignIn &&  <input type='text text-white' placeholder='phone number' className='p-4 my-4
          mt-10 mb-2 bg-gray-900 border-white'>
          </input>
}




{isSignIn &&  <input type='text text-white' placeholder='Email or phone number ' className='p-4 my-4
          mt-10 mb-2 bg-gray-900 border-white'>
          </input>
}
          <input type='password' placeholder='Password' className='p-4 my-6 bg-gray-900 border-white '>
          </input>


          {!isSignIn &&  <input type='text text-white' placeholder='Confirm Password' className='p-4 my-4
          mt-10 mb-2 bg-gray-900 border-white'>
          </input>
}

          <button className='p-2 m-2 bg-red-600 rounded-lg w-full'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>

 
          <div className='flex justify-center items-center mt-2 mb-4 text-gray-300'>
          {isSignIn && "OR"}
          </div>

          <div className='text-white'>
          {isSignIn && 
            <button className='text-white p-2 m-2 bg-black rounded-lg w-full'>
              Use a sign-in code
            </button>
}
          </div>


          <div className='flex justify-center items-center mt-2 mb-4 text-gray-300'>
            {isSignIn && 
            <a href='#'  className='hover:underline p-2 m-2   rounded-lg w-full
            flex justify-center items-center'>Forget password?</a>
  }
          </div>

          <div className=' mt-2 mb-4 text-gray-300'> 
            {isSignIn && 
            <>
            <input type='checkbox' id='remember-me'>
            </input>
            <label for='remember-me'>Remember me</label>
            </>
}
           </div>

          <p className='text-white  cursor-pointer' onClick={ToggleSignIn}>
            {isSignIn? "New to Netflix? Sign up now" : "Already a member? Sign in now"}
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login