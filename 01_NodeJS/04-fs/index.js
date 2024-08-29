const fs = require("fs");

// // Asynchronous Way ✅
console.log("READ START...");
// async way to read file
fs.readFile("input.txt", (error, data) => {
  if (error) {
    console.log("Error :", error);
    return error;
  }
  console.log("READ END...");
  console.log("Data :", data.toString());
  return data;
});
console.log("OTHER STUFF...");

// /*
// READ START...
// OTHER STUFF...
// READ END...
// Data : Hello from Chinmay Kaitade!
// */

// // Synchronous Way ✅
// // synchronous way to read file
let data = fs.readFileSync("input.txt");
console.log("Data :", data.toString());
console.log("READ END...");
console.log("OTHER STUFF...");

/*
// Data : Hello from Chinmay Kaitade!
// READ END...
// OTHER STUFF...
// */

// Reading File ✅
// Read --> Open + Read
const buf = new Buffer(1024);

fs.open("input.txt", "r+", (err, fd) => {
  if (err) {
    console.log("Error in Opening file :", err);
  }
  console.log("File Opened Successfully!"); // File Opened Successfully!

  fs.read(fd, buf, 0, buf.length, 0, (er, bytes) => {
    if (er) {
      console.log("Error in reading File", er);
    }
    console.log("Data :", bytes); // Data : 29
    console.log("Data :", buf.slice(0, bytes).toString()); // Data : Hello from Chinmay Kaitade!
  });
});

// Writing to a File ✅
fs.writeFile("input.txt", "PW Skills!", (err) => {
  if (err) {
    console.log("Error in writing File!");
  } else {
    console.log("Success in writing File!");
  }
});

// Apending to a File ✅
fs.appendFile(
  "input.txt",
  "Appending Data to File by Chinmay!",
  "utf8",
  (err) => {
    if (err) {
      console.log("Error in appending File!");
    } else {
      console.log("Success in appending File!");
    }
  }
);

// Closing the File ✅
// const buf = new Buffer(1024);

fs.open("input.txt", "r+", (err, fd) => {
  if (err) {
    console.log("Error in Opening file :", err);
  }
  console.log("File Opened Successfully!"); // File Opened Successfully!

  fs.read(fd, buf, 0, buf.length, 0, (er, bytes) => {
    if (er) {
      console.log("Error in reading File!", er);
    }
    console.log("Data :", bytes); // Data : 29
    console.log("Data :", buf.slice(0, bytes).toString()); // Data : Hello from Chinmay Kaitade!
    fs.close(fd, (err) => {
      if (err) {
        console.log("Error in closing File!");
      } else {
        console.log("Success in closing File!");
      }
    });
  });
});

// Deleting File ✅
// fs.unlink("input.txt", (err) => {
//   if (err) {
//     console.log("Error in deleting File!");
//   } else {
//     console.log("Success in deleting File!");
//   }
// });
