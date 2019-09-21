var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');
document.getElementById('search').addEventListener('click', searchCountries);
let countries;

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(ShowCountriesList);
    console.log(ShowCountriesList)

}
//ShowCountriesList
function ShowCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        liEl.innerText = 'Capital of ' + item.name + ' is: ' + item.capital;
        countriesList.appendChild(liEl);
    });
}

// fetch ('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => searchCountries(data));

// function searchCountries(countriesData){
//     countries = countriesData;
//     let options ='';
//     console.log('Country is :' + countries[0].name + ' Capital of this country is : ' + countries[0].capital)

// }

// function searchCountries() {
//     var countryName = document.getElementById('country-name').value;
//     if(!countryName.length) countryName = 'Poland';
//     fetch(url + countryName)
//         .then(function(resp) {
//             return resp.json();
//         })
//         .then(ShowCountriesList);
//         console.log(res)
//     }
// // 