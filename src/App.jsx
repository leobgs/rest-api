import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const token = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        console.log("Fetching countries with token:", token);
        const response = await axios.get(
          "https://restfulcountries.com/api/v1/countries",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched countries:", response.data.data);
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    // console.log("countries: ", countries);

    fetchCountries();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Countries Information
      </h1>
      <div className="flex">
        <CountryList
          countries={countries}
          onCountrySelect={setSelectedCountry}
        />
        {selectedCountry && <CountryDetail country={selectedCountry} />}
      </div>
    </div>
  );
};

export default App;
