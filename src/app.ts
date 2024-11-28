import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/", router);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
