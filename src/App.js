import { useState } from "react";
import SearchBar from "./SearchBar";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <p>Check your city Weather</p>
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} />
    </div>
  );
}
