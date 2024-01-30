// const would show error so i replaced it with var for the time being
var shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

var shape = new Square();
shape.setColor("pink");
expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="pink" />');

var shape = new Triangle();
shape.setColor("green");
expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="green" />');
