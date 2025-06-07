import express from 'express';
const router = express.Router();

// Exemplo de rota
router.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Aqui você pode importar e usar outras rotas específicas, exemplo:
// import documentosRoutes from './documentos.js';
// router.use('/documentos', documentosRoutes);

export default router;
