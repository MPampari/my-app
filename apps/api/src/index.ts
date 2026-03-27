import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'api' });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
