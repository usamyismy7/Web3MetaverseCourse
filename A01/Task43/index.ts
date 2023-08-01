const magician_names: string[] = [
  "Gandalf",
  "Dumbledore",
  "Hermione",
  "Merlin",
];

const copy_magician_names: string[] = [...magician_names];

function show_magicians(magicians: string[], text: string): void {
  console.log(text);
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

make_great(copy_magician_names);
show_magicians(magician_names, "\noriginal array: ");
show_magicians(copy_magician_names, "\nmodified array: ");
