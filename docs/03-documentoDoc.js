module.exports = {
  openapi: "3.0.0",
  info: {
    title: "API Documentos",
    version: "1.0.0",
    description: "Documentação da API para upload de documentos PDF"
  },
  paths: {
    "/api/documentos/upload": {
      post: {
        tags: ["Documentos"],
        summary: "Upload de arquivo PDF",
        description: "Faz upload de um arquivo PDF e salva no banco e no servidor.",
        security: [
          {
            bearerAuth: []
          }
        ],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  documento: {
                    type: "string",
                    format: "binary",
                    description: "Arquivo PDF para upload"
                  }
                },
                required: ["documento"]
              }
            }
          }
        },
        responses: {
          201: {
            description: "Upload realizado com sucesso",
            content: {
              "application/json": {
                example: {
                  message: "Arquivo enviado com sucesso!",
                  filename: "1597531234_meuarquivo.pdf"
                }
              }
            }
          },
          400: {
            description: "Arquivo inválido ou nenhum arquivo enviado",
            content: {
              "application/json": {
                example: {
                  error: "Apenas arquivos PDF são permitidos."
                }
              }
            }
          },
          401: {
            description: "Não autorizado - token JWT inválido ou ausente",
            content: {
              "application/json": {
                example: {
                  error: "Token inválido"
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
};
