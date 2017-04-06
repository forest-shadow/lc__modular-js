let human = {
    species: 'human',
    create: function(values) {
      let instance = Object.create(this);
      Object.keys(values).forEach(function(key) {
          instance[key] = values[key];
      });
      return instance;
    },
    saySpecies: function() {
        console.log(this.species);
    },
    sayName: function() {
        console.log(this.name);
    }
};

let musician = human.create({
    species: "musician",
    playInstruments: function() {
        console.log('plays' + this.instrument);
    }
});

let will = musician.create({name: "Will", instrument: "Guitar"});

// let musician = Object.create(human);
// musician.playInstrument = function() {
//     console.log("plays..." + this.instrument);
// };
//
// let will = Object.create(musician);
// will.name = "Will";
// will.instrument = "Drums";