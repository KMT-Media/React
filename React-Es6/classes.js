// class is a type of function
// class properties are stored inside a constructor() method

class Car {
  // constructor - called automaticaly when the object is initialized
  constructor(name) {
    this.brand = name;
  }
  // method
  present() {
    return 'I have ' + this.brand + ' Car';
  }
}

// inheritance
class Model extends Car {
  constructor(name, model) {
    // call the parent contructor method, and get access to the parent's properites and methods
    super(name);
    this.model = model;
  }
  show() {
    return this.present() + ' and its model is ' + this.model;
  }
}

// creating objects
const car_one = new Car('Lmabo');
// Car { brand: 'Lmabo' }

const car_two = new Model('BMW', 2022);
// Model {brand: 'BMW', model: 2022}

if (typeof car_one === 'class' && car_two === 'class') {
  console.log('Car One is a Class');
} else if (typeof car_one == 'object' && car_two == 'object') {
  console.log('car_one and car_two are Objects');
} else {
  console.log(
    `car_one type ${typeof car_one}`,
    `\ncar_two type ${typeof car_two}`
  );
}
console.log(car_one.present());
console.log(car_two.show());
