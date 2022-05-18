import{ useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () =>{
      const result = await axios('https://restcountries.com/v3.1/all');
      setCountries(result.data);
    }
    fetchCountries();
  }, [])
  return (
    <div className="App">
      {/* Dark Mode */}

      {/* Search form */}

      {/* Display Countries */}
      <Countries countries ={countries}/>
    </div>
  );
}

export default App;
