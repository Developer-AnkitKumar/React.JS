function customRandom(reactElement, container) {
    /* 1st Method.............

    const domElement = document.createElement(reactElement.type);
    
    // domElement.innerHTML = `${reactElement.children} - ${reactElement.props.Name}`;

    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */
   // 2nd Method.......

   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;
   for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement);
}

const reactElement = {
    type: 'a', 
    props: {
        href: 'http://flipkart.com',
        target: '_blank',
        Name: "Ankit kumar pal"
    },
    children: 'Click here and visit Google'
    // children: 'click hear and show the Name'
}

const mainContainer = document.getElementById('root')

customRandom(reactElement, mainContainer);
