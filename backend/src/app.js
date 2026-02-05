import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.routes.js";

const app = express();

// If you want to lock down later, restrict origin to your frontend URL
app.use(
  cors({
    origin: true,
    credentials: false,
  })
);

app.use(express.json({ limit: "200kb" }));

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/contact", contactRouter);

export default app;
