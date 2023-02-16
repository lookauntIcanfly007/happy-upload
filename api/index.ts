import express, { Request, Response } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.use(express.static("public"));

const apiUrl = process.env.API_URL;

const html = `
<html>
  <head></head>
  <body>
    <script>
    localStorage.setItem("apiUrl", "${apiUrl}")
    </script>
  </body>
</html>

`;

app.get("/api/users", (req: Request, res: Response) => {
  res.send({ name: "corgiX", email: "corgiX@gmail.com" });
});

app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.listen(3000, () => {
  console.log("express is listening on port 3000");
});
