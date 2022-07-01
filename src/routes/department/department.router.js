import express from "express";
import { httpCreateDepartment } from "./controller/create-department.controller.js";

const departmentRouter = express.Router();

departmentRouter.post("/create", httpCreateDepartment);

export { departmentRouter };
