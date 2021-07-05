// Code SimplerComponent Here
import React from 'react'

let SimplerComponent = ({ handleClick }) =>
    <div onClick={(event) => { handleClick(event) }} style={{ backgroundColor: "#fff" }}>I am just happy</div>

export default SimplerComponent
