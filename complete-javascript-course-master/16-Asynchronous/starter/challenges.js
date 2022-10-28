'use strict';

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=$${lat}&longitude=$${lng}&localityLanguage=en`
//   )
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//     })
//     .catch(err => console.log(`${err.message}`));
// };

// whereAmI(52.508, 13.381);
