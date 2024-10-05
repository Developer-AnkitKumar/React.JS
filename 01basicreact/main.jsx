import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';

function MyApp() {

    return(
        <>
        <h1>hello! I am coder</h1>
        <h2>I a write hear Simple operation</h2>

        <button>
            addValue
        </button>
        <button>
            RemoveValue
        </button>
        </>
    )
}

createRoot(document.getElementById('root')).render(

   <MyApp/> 
  
)