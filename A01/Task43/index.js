var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_names = [
    "Gandalf",
    "Dumbledore",
    "Hermione",
    "Merlin",
];
var copy_magician_names = __spreadArray([], magician_names, true);
function show_magicians(magicians, text) {
    console.log(text);
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
make_great(copy_magician_names);
show_magicians(magician_names, "\noriginal array: ");
show_magicians(copy_magician_names, "\nmodified array: ");
