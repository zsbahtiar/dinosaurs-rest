import express from "express";
import config from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import {
  getDinosaurs,
  getDinosaur,
  createDinosaur,
  deleteDinosaur,
  updateDinosaur,
} from "./controller/DinosaurController";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", getDinosaurs);
app.get("/:id", getDinosaur);
app.delete("/:id/delete", deleteDinosaur);
app.post("/create", createDinosaur);
app.put("/:id/update", updateDinosaur);



const server = app.listen(config.expressURI || 5000, function () {
    const port = server.address().port;
    console.log(`Backend is working on port ${port}`);
  });