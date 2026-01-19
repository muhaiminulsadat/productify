import express from "express";
import {ENV} from "./config/env.js";
import {clerkMiddleware} from "@clerk/express";
import cors from "cors";
import path from 'path'

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

if (!process.env.CLERK_SECRET_KEY) {
  throw new Error("CLERK_SECRET_KEY is missing in environment variables");
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: ENV.FRONTEND_URL, credentials: true}));

// ✅ Clerk middleware AFTER env is loaded
app.use(clerkMiddleware());

app.get("/api/health", (req, res) => {
  res.json({
    message: "Welcome to Productify API",
  });
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/comments", commentRoutes);

// For deployment
if (ENV.NODE_ENV === "production") {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}


app.listen(ENV.PORT, () => console.log(`Server running on PORT ${ENV.PORT}`));
