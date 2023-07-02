import express from "express";
import v1Router from "./routes/v1/index";

const app = express();

// Configuration of json object reception
app.use(express.json());

// Receive settings for array-side objects
app.use(express.urlencoded({ extended: true }));

// Routing of v1 API

app.use("/v1", v1Router);

export default app;
