const express = require("express");
const PORT = 5000;

let app = express();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
