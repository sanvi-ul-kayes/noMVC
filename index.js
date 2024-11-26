const chalk = require("chalk");
const express = require("express");
const app = express();
const port = 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/Home", (req, res) => {
  res.send("Home route");
});
app.get("/", (req, res) => {
  res.send(`
        <form method="POST" action="/info">
        <input name="name" type="text"/>
        <input name="age" type="number"/>
        <input value="submit" type="submit"/>
        </form>
        `);
});
let info = [];

app.post("/info", (req, res) => {
  info.push(req.body);
  res.send(info);
});

app.use((req, res) => {
  res.status(404).send({ msg: "404 not found" });
});
app.listen(port, () => {
  console.log(chalk.bgYellow.black(`Server is running at port number ${port}`));
});
