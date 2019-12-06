import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={(event) => event.target.style.backgroundColor === "rgb(255, 255, 255)" || undefined ?
      event.target.style.backgroundColor = "#f72a2a" : event.target.style.backgroundColor = "#fff"} />
  </div>,
  document.getElementById('root')
);