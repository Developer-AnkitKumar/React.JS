//The 2nd-Project is "BackgroundColor Changer(bgChanger)"
import { useState } from 'react'
import './styles.css';


function App() {
  let [color, setColor] = useState('olive')
  

  return (
      <div className="w-full h-screen"
       style={{backgroundColor: color}}>

      <div className="absolute bottom-0 inset-x-0 flex justify-center px-1 pb-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button
            onClick={() => setColor("tan")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "tan" }}>
              Tan
            </button>
          <button
            onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}>
              Red
            </button>
            <button
            onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}>
              Green
            </button>
            <button
            onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}>
              Yellow
            </button>
            <button
            onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}>
              Pink
            </button>
            <button
            onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}>
              Black
            </button>
            <button
            onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}>
              Blue
            </button>
            <button
            onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "white" }}>
              White
            </button>
            <button
            onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}>
              Orange
            </button>
            <button
            onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "brown" }}>
              Brown
            </button>
            <button
            onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}>
              Violet
            </button>
            <button
            onClick={() => setColor("grey")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}>
              Grey
            </button>
            <button
            onClick={() => setColor("indigo")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "indigo" }}>
              Indigo
            </button>
            <button
            onClick={() => setColor("cyan")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "cyan" }}>
              Cyan
            </button>
            <button
            onClick={() => setColor("ivory")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "ivory" }}>
              Ivory
            </button>
            <button
            onClick={() => setColor("magenta")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "magenta" }}>
              Magenta
            </button>
            <button
            onClick={() => setColor("teal")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "teal" }}>
              Teal
            </button>
            <button
            onClick={() => setColor("gold")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gold" }}>
              Gold
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
