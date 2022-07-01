import express from "express";

import { departmentRouter } from "./department/department.router.js";

const apiRouter = express.Router();

apiRouter.use("/department", departmentRouter);

export { apiRouter };
