var magician_names = [
    "Gandalf",
    "Dumbledore",
    "Hermione",
    "Merlin",
];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
make_great(magician_names);
show_magicians(magician_names);
