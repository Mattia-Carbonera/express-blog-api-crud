const express = require("express");
const app = express();
const port = 3000;

const menuRouter = require("./routers/myPost");
const postsRouter = require("./routers/posts");
// middleware
const errorHandler = require("./middleware/errorHandler.js");
const notFound = require("./middleware/notFound.js");
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

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
