import React from "react";

const CountryDetail = ({ country }) => {
  return (
    <div className="w-2/3 p-4 bg-white shadow-lg rounded-lg ml-4">
      <h2 className="text-3xl font-bold mb-4">{country.name}</h2>
      <img
        src={country.href.flag}
        alt={`${country.name} flag`}
        className="w-24 h-16 mb-4"
      />
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Region:</strong> {country.continent}
      </p>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <p>
        <strong>Area:</strong> {country.size}
      </p>
    </div>
  );
};

export default CountryDetail;
