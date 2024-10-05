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

//yh code app.js me return statement ke hai
/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */