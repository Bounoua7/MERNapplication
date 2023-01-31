const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const user = require('./model/user')
const app = express();
const port = 5000;
const usersRoutes = require('./routes/users')


app.use(bodyParser.json());
app.use(cors());
app.use("/", usersRoutes);
app.get("/",(req, res) => res.send("Hi Oum"));
app.all("*",(req, res) => res.send("This route doesn't exist"));



app.listen(port, () =>
  console.log(`Server is listening on port:http://localhost:${port}`)
);
