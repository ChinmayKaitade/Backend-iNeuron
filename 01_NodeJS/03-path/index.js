const path = require("path");

console.log(path.sep); // "\"

console.log(process.env.path); // ";"

console.log(path.delimiter); // ;

const filePath1 = "/public_html/home/index.html";
const currentFilePath = __filename;
console.log("Current Path :", currentFilePath); // current file path
const currentFilePath1 = __dirname;
console.log("Current Directory :", currentFilePath1); // current file directory

let basename = path.basename(currentFilePath);
console.log("Basename :", basename); // Basename : index.js

let basenameWithoutExt = path.basename(currentFilePath, ".js");
console.log("Basename without Extension :", basenameWithoutExt); // Basename without Extension : index

let dirname = path.dirname(currentFilePath);
console.log("Dirname :", dirname);

console.log("Extension1", path.extname(currentFilePath)); // Extension1 .js
console.log("Extension2", path.extname("index.md.js")); // Extension2 .js

let pathToFile = path.format({
  dir: "/public_html/home",
  base: "index.html",
});
console.log("Path to File :", pathToFile); // Path to File : /public_html/home\index.html

console.log("IsAbsolute :", path.isAbsolute(currentFilePath)); // IsAbsolute : true
console.log("IsAbsolute :", path.isAbsolute("/index.js")); // IsAbsolute : true
console.log("IsAbsolute :", path.isAbsolute("./index.js")); // IsAbsolute : false
console.log("IsAbsolute :", path.isAbsolute("../index.js")); // IsAbsolute : false

let pathToDir = path.join("/home", "js", "dist", "index.js");
console.log("pathToDir :", pathToDir); // \home\js\dist\index.js

console.log("parse :", path.parse(currentFilePath));

console.log(
  "Relative path :",
  path.relative("/home/user/config", "/home/user/js")
); // Relative path : ..\js

console.log("Resolve", path.resolve());

console.log("Normalize :", path.normalize("//home//user//js")); // double slash will replaced with single slash


