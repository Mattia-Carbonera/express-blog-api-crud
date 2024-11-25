const express = require("express");
const app = express();
const port = 3000;

const menuRouter = require("./routers/myPost");
const postsRouter = require("./routers/posts");
// middleware
const errorHandler = require("./middleware/errorHandler.js");
const notFound = require("./middleware/notFound.js");

app.use(express.static("public"));
app.use(express.json());

// rotte
app.use("/bacheca", menuRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// error middleware
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log("Il server è online");
});
