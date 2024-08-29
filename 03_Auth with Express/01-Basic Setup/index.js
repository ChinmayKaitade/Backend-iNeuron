const PORT = process.env.PORT || 5001;

const app = require("./app.js");

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
