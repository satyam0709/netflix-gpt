import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector((store)=> store.config.lang);
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form className='w-full max-w-md flex bg-black p-2 rounded-lg'>
        <input
          type="text"
          className='flex-1 p-3 rounded-l-lg outline-none'
          placeholder={lang[langKey].getPlaceholder}
        />
        <button type="submit" className='px-4 bg-red-600 text-white rounded-r-lg hover:bg-red-700'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
