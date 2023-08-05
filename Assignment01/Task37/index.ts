function make_shirt(size: string = "L", text: string = "I love TypeScript") {
  console.log(`Size: ${size}, Text: ${text}`);
}

make_shirt();
make_shirt("M");
make_shirt("S", "Hello World");
