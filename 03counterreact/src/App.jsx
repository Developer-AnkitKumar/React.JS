import { useCallback, useState, useRef, useEffect } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState(" ");
  
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "123456789"
    if(character) str += "!#@^%$&*~?|\+="

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, number, character, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character])

  return (
      <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-2'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input  
            type="text"
            value={password}
            className="outline-none w-full py-0 px-4"
            placeholder="Password"
            readOnly
            ref={passwordRef}
             />

            <button
             onClick={copyPasswordToClipboard}
             className='flex-shadow rounded-lg outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
             >Copy
            </button>
         </div>
         <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}
             />
             <label>length: {length}</label>
              </div>
              <div className='flex item-center mx-1 gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={number}
                id='numberInput'
                onChange={() =>{
                  setNumber((prev) => !prev);
                }} 
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className='flex item-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={character}
                id='characterInput'
                onChange={() =>{
                  setCharacter((prev) => !prev);
                }} 
                />
                <label htmlFor="characterInput">Characters</label>
              </div>
            </div>
        </div>
      
     </>
      
  )
}

export default App
