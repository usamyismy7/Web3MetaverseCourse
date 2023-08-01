function make_shirt(size, text) {
    if (size === void 0) { size = "L"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("Size: ".concat(size, ", Text: ").concat(text));
}
make_shirt();
make_shirt("M");
make_shirt("S", "Hello World");
