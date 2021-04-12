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


app.listen(config.expressURI, '0.0.0.0', function(){
  console.log(`Backend running on ${config.expressURI}`);
})
