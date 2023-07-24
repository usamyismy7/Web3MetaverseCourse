const favoriteMode: string[] = ["Motorcycle", "Car", "Jeep"];

const messages: string[] = [
  "I would like to own Honda",
  "I have Suzuki Cultus",
  "I might buy Land Cruiser",
];

for (let i = 0; i < messages.length; i++) {
  console.log(`${messages[i]} ${favoriteMode[i]}`);
}
