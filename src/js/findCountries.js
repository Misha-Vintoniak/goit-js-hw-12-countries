import debounce from 'lodash.debounce';

import API from './fetchCountry.js';
import { outputInfo, noCountry, onFetchError } from './notify.js';

import countriesCard from '../template/countries-card.hbs';
import countriesList from '../template/countries-list.hbs';

const input = document.querySelector('.js-input-search');
const divCountries = document.querySelector('.js-countries-container');
const clearBtn = document.querySelector('.btn-clear');

input.addEventListener('input', debounce(onSearch, 1000));

clearBtn.addEventListener('click', clearCountry);

function onSearch() {
  if (!input.value) {
    clearCountry();
    return;
  }
  API(input.value).then(countries => onCountrySearch(countries));
}

function onCountrySearch(countries) {
  if (countries.length === 1) {
    clearCountry();
    return appendCountriesCard(countries);
  } else if (countries.length >= 2 && countries.length <= 10) {
    clearCountry();
    return appendListCountries(countries);
  } else if (countries.length > 10) {
    return outputInfo();
  } else if (countries.status === 404) {
    return noCountry();
  } else {
    return onFetchError();
  }
}

function appendListCountries(countries) {
  divCountries.insertAdjacentHTML('beforeend', countriesList(countries));
}
function appendCountriesCard(countries) {
  divCountries.insertAdjacentHTML('beforeend', countriesCard(countries));
}

function clearCountry() {
  divCountries.innerHTML = '';
}
