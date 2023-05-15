import express from "express";
import routes from "./routers";

const app = express();

const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}/`);
});
