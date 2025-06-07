const express = require("express");
var cors = require("cors");
const contactRouter = require("./contacts/contactRouter");

const app = express();
const port = 3000;

app.use(cors());
app.use(contactRouter);
app.use((req, res) => res.status(404).send());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
