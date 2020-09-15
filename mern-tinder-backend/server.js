import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url =
  "mongodb+srv://admin:rxGLgM655HWczLDn@cluster0.6dkdp.mongodb.net/mern-tinder-db?retryWrites=true&w=majority";

//middlewares

app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello, world"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listeners

app.listen(port, () => console.log(`listening on localhost: ${port}`));
