const loadCountries = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (countries) => {
  console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  //   console.log(countriesHTML[0]);
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

const getCountryHTML = (country) => {
  return `
   <div class="country">
   <h2>${country.name.common}</h2>
   <img width="200px" src="${country.flags.png}">
   <h5><span>Capital:</span> ${country.capital}</h5>
   </div>
    `;
};
