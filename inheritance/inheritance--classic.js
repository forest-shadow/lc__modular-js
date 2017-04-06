function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

let Person = function(name) {
  this.name = name;
};

Person.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

Person.prototype.shoutName = function() {
  console.log("Hi my name us " + this.name + "!");
};


let john = new Person("john");
let bobby = new Person("bobby");
john.sayName(); // Hi my name is john
bobby.shoutName(); // Hi my name is bobby!


let Musician = function(name, instrument) {
    Musician.super_.call(this, name);
};

inherits(Musician, Person);

Musician.prototype.getInstrument = function() {
    console.log(this.instrument);
};

Musician.prototype.shoutName = function() {
  console.log("DUDE! my name is " + this.name + "!!!!");
};

let julia = new Musician("julia", "trombone");
julia.sayName(); // julia
julia.getInstrument(); // instrument
julia.shoutName();