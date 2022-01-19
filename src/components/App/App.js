import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  const name = 'Company Name';

  return (
    <div className="App">
      <Header company={name} />
      <SearchBar />
    </div>
  );
}