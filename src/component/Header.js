import React from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase';
import { onAuthStateChanged , signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { addUser , removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LOGO, USER_AVATAR } from '../utils/constant';

const Header = () => {

const navigate = useNavigate();
const dispatch = useDispatch();

const user = useSelector((store)=> store.user);
 
  const handleSignOut = () =>{
  signOut(auth).then(() => {
  }).catch((error) => {
    // An error happened. 
  });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (user) => {
      if (user) {
      const {uid , email , displayName , photoURL} = user;
      const profilePhoto =
      photoURL || USER_AVATAR;
    dispatch(addUser({ uid, email, displayName, photoURL: profilePhoto }));
      navigate('/browse');
      }
      else {
      dispatch(removeUser());
      navigate('/');
    }
    });

    return ()=> unsubscribe();
  
  },[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
  <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="LOGO" />

  {user && (
    <div className="flex p-2 justify-between">
      <img src={user.photoURL} alt="User" className="w-12 h-12 rounded-xl" />
      <button
        onClick={handleSignOut}
        className="px-3 py-1 hover:bg-red-700 text-white font-bold rounded-lg"
      >
        Sign Out
      </button>
    </div>
  )}
</div>
    
  )
}

export default Header