import './searchbar.css'
// import { useState } from 'react' 

export default function SearchBar(props) {
   // const [term, setTerm] = useState("Default State value");

   function submitted(ev) { 
      ev.preventDefault();
      console.log('submitted');
      // setTerm(ev.target['keyword'].value);
   }
   
   function focused(ev) {
      console.log('onFocus', ev.target.value);
   }
   
   function changed(ev) { 
      console.log('onInput', ev.target.value);
   }
   
   function clicked(ev) { 
      ev.preventDefault();
      console.log('clicked');
   }



   return (
      <section className="searchBar">
         <form onSubmit={submitted}>
            <input 
               type="text" 
               name="keyword" 
               className="searchText" 
               placeholder="keyword" 
               onFocus={focused}
               onInput={changed}   //onInput={(ev) => changed(ev)}  
            />
            {/* <button type="submit" className="searchBtn" name="searchBtn"onClick={clicked} >  */}
            <button type="submit" className="searchBtn" name="searchBtn" > 
               Search 
            </button>
         </form>
         {props.term ? <p>You searched for: {props.term}</p> : ""}
      </section>
   )
}