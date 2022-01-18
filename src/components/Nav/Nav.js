import React from 'react'

export default function Nav(props) {
   return (
      <div>
         <h3>yes that is right, Marco' name is : {props.hisName}</h3>
         <h3>and also .. his car is : {props.hisCar} </h3>
      </div>
   )
}
