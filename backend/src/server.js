import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`✅ Portfolio API listening on http://127.0.0.1:${PORT}`);
});
