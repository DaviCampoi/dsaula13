import express from "express";
import chalk from "chalk";
import routes from "./routes/routes.js";

import { swaggerUi, swaggerSpec } from "./swagger.js";

const app = express();

app.use(express.json());
app.use("/", routes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(chalk.green(`Servidor rodando em http://localhost:${port}`));
  console.log(chalk.yellow(`Documentação Swagger em http://localhost:${port}/docs`));
});
