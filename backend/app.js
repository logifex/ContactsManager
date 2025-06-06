const express = require("express");
var cors = require('cors')
const contactRouter = require("./contacts/contactRouter");

const app = express();
const port = 3000;

app.use(cors());
app.use(contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
