'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, lang, className = ``) {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  // countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener(`load`, function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data, `por`);

//     const [neighbour] = data.borders;

//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener(`load`, function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, `spa`, `neighbour`);
//     });
//   });
// };

// getCountryAndNeighbour(`portugal`);

// setTimeout(() => {
//   console.log(`1 second passed`);
//   setTimeout(() => {
//     console.log(`2 second passed`);
//     setTimeout(() => {
//       console.log(`3 second passed`);
//       setTimeout(() => {
//         console.log(`4 second passed`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const getJSON = function (url, errorMsg = `Something went wrong`) {
  fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} (${res.status})`);
    }

    return res.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Country not found`
  ).then(data => renderCountry(data[0], `ell`));
};

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => {
//       console.log(res);

//       if (!res.ok) {
//         throw new Error(`Country not found (${res.status})`);
//       }

//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0], `ell`);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(res => res.json())
//     .then(data => renderCountry(data, `alb`, `neighbour`))
//     .catch(err => {
//       renderError(`Something went wrong ⛔⛔ ${err.message}. Try again!`);
//       console.error(`${err} ⛔💥⛔`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

btn.addEventListener(`click`, function () {
  getCountryData(`greece`);
});

// getCountryData(`djdhfhdjfj`);

// console.log(`Test start`);
// setTimeout(() => {
//   console.log(`0 sec timer`);
// }, 0);
// Promise.resolve(`Resolved promise1`).then(res => console.log(res));

// Promise.resolve(`Resolved promise 2`).then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log(`test end`);

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery ball is happening`);

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`You are the winner`);
    } else {
      reject(new Error(`You lost your money`));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds);
  });
};

wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 second`));

Promise.resolve(`abc`).then(x => console.log(x));
Promise.reject(new Error(`Problem`)).catch(x => console.error(x));
