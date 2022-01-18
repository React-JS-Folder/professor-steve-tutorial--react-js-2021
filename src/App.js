import './App.css';
import Header from './components/Header/Header'

function App() {
  const name = 'Marco';
  const car = "BMW 5.0, 400hp";

  return (
    <div className="App">
      <Header name={name} car={car} />
      <h1>{name}</h1>
      <h1>{car}</h1>
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
}

export default App;
