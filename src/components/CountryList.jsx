import React from "react";

const CountryList = ({ countries, onCountrySelect }) => {
  return (
    <div className="w-1/3 overflow-y-auto">
      {countries.map((country) => (
        <div
          key={country.iso3}
          className="p-4 border-b border-gray-200 cursor-pointer hover:bg-blue-100 transition duration-200"
          onClick={() => onCountrySelect(country)}
        >
          <h2 className="text-xl font-semibold">{country.name}</h2>
          <img
            src={country.href.flag}
            alt={`${country.name} flag`}
            className="w-12 h-8 mt-2"
          />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
