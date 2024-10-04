
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*
function MyApp() { // function is 
    const reactElement = {  // Object properties is not excuted in this react properties
        type: 'a', 
        props: {
            href: 'http://flipkart.com',
            target: '_blank',
            Name: "Ankit kumar pal"
        },
        children: 'Click here and visit flipkart'
    }
    return(
        <>
            <a href={reactElement.props.href} target={reactElement.props.target}>{reactElement.children}</a>
            <h2>This site is related to E-Commerse application</h2>
        </>
    )
}
    */

// const ReactElement = {  // Object properties is not excuted in this react properties
//     type: 'a', 
//     props: {
//         href: 'http://flipkart.com',
//         target: '_blank',
//         Name: "Ankit kumar pal"
//     },
//     children: 'Click here and visit Google'
// }

// const anotherElement = (   // Function properties
//     <a href="http://flipkart.com" target='_blank'>visit hear google !</a>
// )
function MyApp() {
    return(
        <>
        <a href="http://google.com">visit hear google !!</a>
        </>
    )
}

createRoot(document.getElementById('root')).render(

   <MyApp/>
    // anotherElement // excution process is return object 
  
)
