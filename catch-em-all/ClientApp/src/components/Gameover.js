import React from 'react';
import { useNavigate } from "react-router-dom";


export const Gameover = () => {
  const navigate = useNavigate()



  /**
   * handle button click play again
   * navigate back to main page to continue playing
   */
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <div className='flex flex-wrap justify-center mt-6'>
        <img
          src='https://media.tenor.co/images/f78c2e4bef5ca120d994589f411d36aa/tenor.gif' alt='squirtle tongue out'
        />
      </div>
      <div className='text-center mt-6 text-white'>
        <h1>GAME OVER</h1>
        <button className='rounded-full bg-sky-500/50' onClick={() => handleClick()}>Play again</button>
      </div>
    </>
  )
}
