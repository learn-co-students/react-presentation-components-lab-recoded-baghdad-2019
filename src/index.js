import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={()=>document.getElementById('function-useless').innerHTML = 'this is a test'} />
  </div>,
  document.getElementById('root')
);