function about_car(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        details: details,
    };
    return car;
}
var obj1 = about_car("Chevy", "Camaro", "V8", "Automatic", "Leather");
var obj2 = about_car("Dodge", "Challenger", "V8", "Automatic", "Leather", "Sunroof", "Navigation");
var obj3 = about_car("Ford", "Mustang", "V8", "Automatic", "Leather", "Sunroof", "Navigation", "Racing Stripes");
console.log(obj1);
console.log(obj2);
console.log(obj3);
