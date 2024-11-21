const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const menuRouter = require("./routers/myPost");
app.use("/bacheca", menuRouter);
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
  console.log("Il server è online");
});
