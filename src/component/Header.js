import React from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {

const navigate = useNavigate();
const user = useSelector((store)=> store.user);
 
  const handleSignOut = () =>{
  signOut(auth).then(() => {
    navigate("/");
  }).catch((error) => {
    // An error happened.
  });
  };

  return (
    <div className='absolute px-24 w-full py-2 bg-gradient-to-b from-black z-10'>
        <img className='max-w-56' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='LOGO'>
        </img>

      {user && <div className='flex  justify-end t-m-0'>
        <img src={user.photoURL} alt='User' className='w-12 h-12 rounded-full'/>
        <button onClick={handleSignOut} className= 'bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg'>
          (Sign Out)</button>
      </div>}

    </div>
    
  )
}

export default Header