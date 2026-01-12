import express from "express";
import cors from "cors";
import "dotenv/config";
import { DB_CONNECTION } from "./config/dbConntection.js";
import { UserRoutes } from "./routes/UserRoutes.js";

import { MoviesRoutes } from "./routes/MoviesRoutes.js";
import { BookingRoutes } from "./routes/BookingRoutes.js";
import { globalErrorHandler } from "./middlwares/globalErrorHandler.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express(); // App container ;
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARE;
app.use(cors()); // Used if front-end server is apart,different from back-end server ;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from uploads directory
app.use("/assets", express.static(path.join(__dirname, "uploads")));

// CONNECTION ;
DB_CONNECTION(); // database mongoose connection ;

//ROUTES
app.get("/", (req, res) => {
  res.send("Routing is working");
});
app.use("/api/auth", UserRoutes);
app.use("/api/movies", MoviesRoutes);
app.use("/api/booking", BookingRoutes);

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
