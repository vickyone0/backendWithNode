const {parse} = require('csv-parse');
const { on } = require('events');
const fs = require('fs');


habitablePlanet = [];


function isHabitablePlanet(planet) {
    return planet.koi_disposition === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}
fs.createReadStream('kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)){
        habitablePlanet.push(data);
    }
    
  })
  .on('error', (err) => {
    console.log(err);
  })
  .on('end', () => {
    console.log(habitablePlanet);
    console.log(`found ${habitablePlanet.length} habitablePlanet with the help of kelper data`);
    console.log('done');
  });


