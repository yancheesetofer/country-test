import{ useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () =>{
      //wait for data
      const result = await axios('https://restcountries.com/v3.1/all');
      setCountries(result.data);
      setIsLoading(false);
    }
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <header>Our World</header>

      <Countries countries ={countries} isLoading={isLoading}/>
    </div>
  );
}

export default App;
