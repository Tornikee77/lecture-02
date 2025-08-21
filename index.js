// const EventEmitter = require("events");
// const celebrity = new EventEmitter();
// celebrity.on("Race win", () => {
//   console.log("observer1:congratulations!");
// });
// celebrity.on("Race win", () => {
//   console.log("observer2:Test text");
// });
// celebrity.on("Race lose", () => {
//   console.log("observer3: f*ck");
// });
// celebrity.on("Race result", (result, time) => {
//   console.log(`observer3: Race finished with${result} in ${time} sec`);
// });
// celebrity.emit("Race result", 9.01);
// process.on("exit", () => {
//   console.log("Process exiting...");
// });
const path = require("path");
path.basename("/users/files/test/text.txt");
console.log(path.basename("/users/files/test/text.txt"));
console.log(path.basename("/users/files/test/text.txt", "txt"));
console.log(path.dirname("/users/files/test/text.txt"));
console.log(path.extname("/users/files/test/text.txt"));
console.log(path.parse("/users/files/test/text.txt"));
console.log(path.join("/users", "files", "test", "text"));
