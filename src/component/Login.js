import React from 'react'
import Header from './Header'
import { useState  , useRef} from 'react'
import {isValid} from '../utils/IsValid'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
 import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const[isSignIn , setIsSignIn] = useState(true);
  const[errorMessage , setErrorMessage] = useState(null);

   const dispatch = useDispatch();

  const INemail = useRef(null);
  const UPemail = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const name = useRef(null);
  const phone = useRef(null);

const handleButtonClick = () => {
  const emailValue = INemail.current ? INemail.current.value : '';
  const emailValue2 = UPemail.current ? UPemail.current.value : '';
  const passwordValue = password.current ? password.current.value : '';
  const confirmPasswordValue = confirmPassword.current ? confirmPassword.current.value : '';
  const nameValue = name.current ? name.current.value : '';
  const phoneValue = phone.current ? phone.current.value : '';
  // const confirmPasswordValue = isConfirmPasswordValid.current ? isConfirmPasswordValid.current.value : isConfirmPasswordValid;

  
 
  // Validation (Pass null for confirm password during sign-in)
  const message = isValid(emailValue, emailValue2 ,passwordValue,confirmPasswordValue , nameValue , phoneValue , isSignIn);
  setErrorMessage(message);

  if(message) return;

  if(!isSignIn){
    
  createUserWithEmailAndPassword(auth, emailValue2, passwordValue)
  .then((userCredential) => {
     const user = userCredential.user;
     updateProfile(user, {
      displayName: (nameValue), photoURL: "https://avatars.githubusercontent.com/u/115513910?v=4"
    }).then(() => {
 
    const {uid , email , displayName , photoURL} = auth.currentUser;
    dispatch(addUser({uid: uid , email: email , displayName: displayName , photoURL: photoURL}));
 
    }).catch((error) => {
      setErrorMessage(error.message);
    });
     console.log(user);

   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
  })
}
else{

  //signin logic

 signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
}
};
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
        <form  

        onSubmit={(e) => e.preventDefault()}

         className='flex flex-col w-3/12 relative p-12 bg-black text-white bg-opacity-80 mt-20'>
        <h1 className='font-bold text-3xl text-white'>
        {isSignIn ? 'Sign In' : 'Sign Up'}
          </h1>

          {!isSignIn && (<input 
         ref={name}
         type='text' placeholder='Full Name' className='p-4 my-4
          mt-10 mb-2 bg-gray-900 border-white text-white'>
          </input>
          )}

            {isSignIn && (<input
              ref={INemail}
                type="email"
                placeholder="Email or phone number"
              className="p-4 my-4 mt-10 mb-2 bg-gray-900 border-white text-white"
             />)}

            {!isSignIn && (<input
              ref={UPemail}
                type="email"
                placeholder="Email"
              className="p-4 my-4 mt-10 mb-2 bg-gray-900 border-white text-white"
             />)}

             

          {!isSignIn && ( <input
          ref={phone}
           type='text' placeholder='phone number' className='p-4 my-4
          mt-10 mb-2 bg-gray-900 border-white text-white'>
          </input>)
            }

          <input
          ref = {password}
           type='password' placeholder='Password' className='p-4 my-6 bg-gray-900 border-white '>
          </input>


          {!isSignIn && ( <input 
          ref = {confirmPassword}
          type='password' placeholder='Confirm Password' className='p-4 my-4
          mt-10 mb-2 bg-gray-900 border-white text-white'>
          </input>)
           }
          
          <p className='text-red-500 text-lg font-bold'> 
            {errorMessage}
          </p>

          <button className='p-2 mt-8 bg-red-600 rounded-lg w-full' onClick={handleButtonClick}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>

 
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
            <button  className='hover:underline p-2 m-2   rounded-lg w-full
            flex justify-center items-center'>Forget password?</button>
  }
          </div>

          <div className=' mt-2 mb-4 text-gray-300'> 
            {isSignIn && 
            <>
            <input type='checkbox' id='remember-me'>
            </input>
            <label htmlFor='remember-me'>Remember me</label>
            </>
}
           </div>

          <p className='text-white  cursor-pointer' onClick={ToggleSignIn}>
            {isSignIn?  "New to Netflix? Sign up now" : "Already a member? Sign in now"}
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login