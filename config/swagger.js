import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API",
      version: "1.0.0",
      description: "Documentação da API",
    },
  },
  apis: ["./routes/*.js"], // Ajuste caso sua pasta de rotas seja diferente
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
