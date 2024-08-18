import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <>
    <h1 className='bg-slate-500 text-white flex items-center text-8xl justify-center w-screen h-40'>User:{userid}</h1>
    
    </>
  )}


export default User