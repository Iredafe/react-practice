import React from 'react';
import ReactDOM from 'react-dom';


const App=()=>{

  const buttonText = 'Click Me'
  return <div>
<label class="label" for="name">Enter Name</label>
<input id="name" type="text"></input>
<button style={{backgroundColor: 'blue', color:'white'}}>{buttonText}</button>
  </div>
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
