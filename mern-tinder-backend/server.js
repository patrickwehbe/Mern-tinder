import express from "express";
import mongoose from "mongoose";

//App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url =
  "mongodb+srv://admin:rxGLgM655HWczLDn@cluster0.6dkdp.mongodb.net/mern-tinder-db?retryWrites=true&w=majority";

//middlewares

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello, world"));

//Listeners

app.listen(port, () => console.log(`listening on localhost: ${port}`));
