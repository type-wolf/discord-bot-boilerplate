import { Router } from "express";
import getUsersRouter from "./getUsers";

const v1Router = Router();

v1Router.use("/getUsers", getUsersRouter);

export default v1Router;
