const os = require("os");

console.log("CPU Architecture :", os.arch()); // CPU Architecture : x64

console.log("Free Memory :", os.freemem()); // Free Memory : 1439674368

console.log("Total Memory :", os.totalmem()); // Total Memory : 8419024896

console.log("Network Interfaces :", os.networkInterfaces()); // JSON format
console.log("Network Interfaces :", JSON.stringify(os.networkInterfaces())); // String format

console.log("Temporary Directory :", os.tmpdir()); // it gives Temp path of your system

console.log("Endianness is :", os.endianness()); // Endianness is : LE

console.log("Hostname is :", os.hostname()); // Hostname is : Chinmay

console.log("Platform is :", os.platform()); // Platform is : win32

console.log("Release :", os.release()); // Release : 10.0.22631
