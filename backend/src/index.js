import express from "express";
import {ENV} from "./config/env.js";
import { clerkMiddleware } from '@clerk/express'
import cors from "cors";

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to Productify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.listen(ENV.PORT, () =>
  console.log(`Server is running on PORT: ${ENV.PORT}`)
);
