const countries = require('countries-list');

const countryNames = Object.values(countries.countries).map((country) => country.name);

export default countryNames;