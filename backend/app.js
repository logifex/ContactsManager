const express = require("express");
const contactRouter = require("./routes/contactRouter");

const app = express();
const port = 3000;

app.use(contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
