/*
clean up the array of bands
al the bands should have canada aas a country
the bands name should have all words capitalized
remove all dots from the band names

iterate over the array and replace each object's country property value to canada - basic iteration
in the same iteration, capitalize all names,
remove all dots from the band name
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalizeString(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function capitalizePhrase(phrase) {
  return phrase.split(' ').map(word => capitalizeString(word)).join(' ');
}

function processBands(band) {
  return bands.map(band => {
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = capitalizedName.replace(/\./g, '');

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}


// function processBands(data) {
//   data.forEach(band => {
//     band.country = 'Canada';

//     let strName = band.name;
//     band.name = strName[0].toUpperCase() + strName.slice(1);

//     Object.keys(band).forEach(info => {
//       if (Object.is(band[info], String(band[info]))) {
//         band[info] = band[info].replace(/\./g, '');
//       }
//     });
//   });

//   console.log(data);
// }

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]