import express from "express";
import cors from "cors";
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
} from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/restaurants", async (req, res) => {
  const restaurants = await getAllRestaurants();
  res.send(restaurants);
});

app.get("/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  const restaurant = await getRestaurant(id);
  res.send(restaurant);
});
app.post("/restaurants", async (req, res) => {
  const { name, address, email } = req.body;
  const restaurant = await createRestaurant(name, address, email);
  res.status(201).send(restaurant);
});
app.patch("/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  const { name, address, email } = req.body;
  const restaurant = await updateRestaurant(id, name, address, email);
  res.send(restaurant);
});
app.delete("/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteRestaurant(id);
  res.send(result);
});

// app.get("/notes", async (req, res) => {
//   const notes = await getNotes();
//   res.send(notes);
// });

// app.get("/notes/:id", async (req, res) => {
//   const id = req.params.id;
//   const note = await getNote(id);
//   res.send(note);
// });

// app.post("/notes", async (req, res) => {
//   const { title, contents } = req.body;
//   const note = await createNote(title, contents);
//   res.status(201).send(note);
// });

// app.patch("/notes/:id", async (req, res) => {
//   const id = req.params.id;
//   const { title, contents } = req.body;
//   const note = await updateNote(id, title, contents);
//   res.send(note);
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke 💩");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
