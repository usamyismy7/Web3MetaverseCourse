interface AboutCar {
  manufacturer: string;
  model: string;
  details: string[];
}

function about_car(
  manufacturer: string,
  model: string,
  ...details: string[]
): AboutCar {
  const car: AboutCar = {
    manufacturer: manufacturer,
    model: model,
    details: details,
  };
  return car;
}

const obj1 = about_car("Chevy", "Camaro", "V8", "Automatic", "Leather");
const obj2 = about_car(
  "Dodge",
  "Challenger",
  "V8",
  "Automatic",
  "Leather",
  "Sunroof",
  "Navigation"
);
const obj3 = about_car(
  "Ford",
  "Mustang",
  "V8",
  "Automatic",
  "Leather",
  "Sunroof",
  "Navigation",
  "Racing Stripes"
);

console.log(obj1);
console.log(obj2);
console.log(obj3);
