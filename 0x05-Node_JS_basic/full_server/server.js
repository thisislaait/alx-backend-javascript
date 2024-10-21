// full_server/server.js
import express from 'express';
import mapRoutes from './routes/index.js';

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
