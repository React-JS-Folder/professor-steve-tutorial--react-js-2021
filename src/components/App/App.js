import React from 'react';
import { useState } from 'react'



export default function App() {
  const [term, setTerm] = useState("");
  const [terms, setTerms] = useState(["term 1", "term 2"]);


  function submitted(ev) {
    ev.preventDefault();
    // setTerm(ev.target['newSearchItem']);
    setTerms([...terms, term]);
  }
  console.log(terms);






  return (
    <div>
      <h1>This is App Component</h1>


      <div>
      <form onSubmit={submitted}  >
        <input type="text" name="newSearchItem" onInput={ (e) => setTerm(e.target.value)} />
        <button type="submit"> send form </button>
      </form>
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
