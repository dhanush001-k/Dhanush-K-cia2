import React, { useState } from 'react'
import Select from 'react-select'
import './Dropdown.css'
function Form() {
  var colors=[
    {
       value:1,
       label:"lime"
    },
    {
       value:2,
       label:"lavender"
    },
    {
       value:3,
       label:"crimson"
    },
    {
      value:3,
      label:"darkblue"
   },
   {
    value:1,
    label:"grey"
 },
    {
       value:1,
       label:"teal"
    },
    {
      value:1,
      label:"rebeccapurple"
   },
   {
    value:1,
    label:"aquamarine"
 },
  ];
  var [color,setColor]=useState(colors.label);
  var Changer = (e) => {
    setColor(e.label);
  }
  return (
    <>
    <center>
      <h1>Color Changer</h1>
      <div className="box1">
        <Select options={colors} onChange={Changer} className="sl"></Select>
      </div>
      <br></br>
      <br></br>
      <div className='box'>
        <style>{'.box{background-color:'+color+';width:500px;height:150px;border-radius:20px;padding-top:5px;padding-bottom:10px;}'}</style>
        <h3> {color}</h3>
      </div>
      </center>
    </>
  )
}

export default Form;