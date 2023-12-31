import "dotenv/config.js";
import express from "express";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
