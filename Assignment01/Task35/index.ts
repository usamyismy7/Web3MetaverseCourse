interface Animal {
  name: string;
  statement: string;
}

let animals: Animal[] = [
  {
    name: "Cheetah",
    statement:
      "The cheetah is the fastest land animal in the world, reaching speeds of up to 70 miles per hour.",
  },
  {
    name: "Greyhound",
    statement:
      "The Greyhound is the fastest dog in the world, reaching speeds of up to 45 miles per hour.",
  },
  {
    name: "Pronghorn",
    statement:
      "The pronghorn is the fastest land animal in the Western Hemisphere, reaching speeds of up to 60 miles per hour.",
  },
];

for (let animal of animals) {
  console.log(`${animal.name}\n${animal.statement}\n`);
}

console.log(
  "Common characteristic: These three animals are all known for their exceptional speed and agility, making them some of the fastest land animals in their respective habitats.\nGreyhound would make a great pet, but the other two are not recommended."
);
