import React from 'react'
import Nav from '../Nav/Nav'

export default function Header(props) {
   return (
      <div>
         <h1>My name is {props.name}</h1>
         <h2>My car is {props.car} </h2>
         <hr />
         <hr />
         <Nav hisName={props.name} hisCar={props.car} />
         <hr />
         <hr />
      </div>
   )
}
