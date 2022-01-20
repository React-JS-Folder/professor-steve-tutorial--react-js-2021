import React from 'react';
import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';



export default function App() {
  const [term, setTerm] = useState("");
  const [terms, setTerms] = useState(["term 1", "term 2"]);

  function submitted(ev) {
    ev.preventDefault();
    setTerms([...terms, term]);
  }

  console.log(terms);


  return (
    <div>
      <h1>This is App Component</h1>

      <SearchBar setTerm={setTerm} submitted={submitted}/>
      <div>
        <p>You searched for: {term} </p>
      </div>

      <ul>
        {terms.map((eachterm) => (
          <li>{eachterm}</li>   
        ))}
      </ul>
      </div>

  )
}
