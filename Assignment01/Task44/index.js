function sandwich_items() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with ".concat(items.join(", "), ".\n"));
}
sandwich_items("ham", "cheese", "tomato");
sandwich_items("cheese", "tomato");
sandwich_items("ham", "cheese", "tomato", "lettuce", "mayo");
