const writeFileSync = require('fs').writeFileSync;
const iso3 = require('./iso3.json');
// console.log(iso3);

const keys = Object.keys(iso3);
console.log(keys);
const vals = Object.values(iso3);
console.log(vals);

const data = {};
Object.keys(iso3).forEach((k) => {
  data[iso3[k]] = k;
});

console.log(data);
writeFileSync('./iso2.json', JSON.stringify(data, null, 2));