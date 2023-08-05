const magician_names: string[] = [
  "Gandalf",
  "Dumbledore",
  "Hermione",
  "Merlin",
];

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magician_names);
