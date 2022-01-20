import './searchbar.css'


export default function SearchBar(props) {

  const {setTerm, submitted } = props;

  return (
  <div className="searchbar">
     <h4>SearchBar Component</h4>
     <form onSubmit={submitted}  >
        <input type="text" name="newSearchItem" onInput={ (e) => setTerm(e.target.value)} />
        <button type="submit"> send form </button>
      </form>
  </div>
  );
}
