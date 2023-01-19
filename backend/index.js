const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')



const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/",(req, res) => res.send("Hi from  Express"));
app.all("*",(req, res) => res.send("That route doesn't exist"));


app.listen(port, () =>
  console.log(`Server is listening on port:http://localhost:${port}`)
);
