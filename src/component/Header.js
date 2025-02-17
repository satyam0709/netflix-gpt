import React from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase';
import { connectAuthEmulator, onAuthStateChanged , signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { addUser , removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LOGO, USER_AVATAR } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

const navigate = useNavigate();
const dispatch = useDispatch();

const user = useSelector((store)=> store.user);

const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
 
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
  
  const handleGptSearchClick = ()=>{

    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
  <img className="w-44" src={LOGO} alt="LOGO" />

  {user && (
    <div className="flex p-2">

      {showGptSearch &&
        <select
       onChange={handleLanguageChange}
       >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
}       

        <button className='px-4 py-2 mx-4 my-2 bg-green-800 text-white font-bold rounded-lg'
        onClick={handleGptSearchClick}
        >
       {       
        showGptSearch ? "HomePage" : "GPTSearch"}
      </button>

      <img  className="w-12 h-12 rounded-xl" src={user.photoURL} alt="User" />
      <button
        onClick={handleSignOut}
        className="  hover:bg-red-700 text-white font-bold rounded-lg"
      >
        Sign Out
      </button>
    </div>
  )}
</div>
    
  )
}

export default Header