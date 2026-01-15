import express from "express";
import {ENV} from "./config/env.js";
import {clerkMiddleware} from "@clerk/express";
import cors from "cors";

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

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Productify API",
  });
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/comments", commentRoutes);

app.listen(ENV.PORT, () => console.log(`Server running on PORT ${ENV.PORT}`));
