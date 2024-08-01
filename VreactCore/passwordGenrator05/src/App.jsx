import { useState,useCallback,useEffect,useRef } from "react"
function App() {
const [lenght,setlenght] = useState(8)
const [number,setNumber] = useState(false)
const [characters,setCaracters] = useState(false)
const [password,setPasswrod] = useState('')

const passRef = useRef(null)
// eslint-disable-next-line no-unused-vars
const psaawordGen = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number) str += "123456789"
  if(characters) str += "!@#$%^&*()" 
  for(let i = 1; i<=lenght; i++){
    let char =Math.floor(Math.random()*str.length + 1)
    pass += str.charAt(char)
  }
  setPasswrod(pass)
}, [lenght, number, characters, setPasswrod]);

const copytopassclipbord = useCallback(()=>{
  passRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

   useEffect(()=>{
  psaawordGen()
   },[lenght,number,characters,psaawordGen])
  return (
    <>
 
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500">
   <h1 className="text-white text-center my-3">Passoerd generator</h1>
   <div className="flex shadow rounded-lg overflow-hidden mb-4">
     <input 
     type="text"
     value={password}
     className="outline-none w-full py-1 px-3"
     placeholder="password"
     readOnly
     ref={passRef}
  
      /> 
      <button onClick={copytopassclipbord} className="outline-none bg-blue-600 border-none text-white px-10 font-bold">Only</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={lenght}
          className="cursor-pointer"
          onChange={(e)=>{setlenght(e.target.value)}}
           />
           <label>Length:{lenght}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={number}
          id="numberinput"
          onChange={()=>{
          setNumber((pre)=> !pre)
          }}
           />
           <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={characters}
          id="numberinput"
          onChange={()=>{
          setCaracters((pre)=> !pre)
          }}
           />
           <label htmlFor="">Char</label>
        </div>
      </div>
   </div>
 
   
    </>
  )
}

export default App
