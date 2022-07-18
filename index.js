const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//

app.listen(PORT);
console.log(`listening on localhost:${PORT}`);
