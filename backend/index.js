const express = require('express');
const cors = require('cors');
const postRoutes = require('./src/routes/postRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// 挂载路由
app.use('/api', postRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务端运行在 http://localhost:${PORT}`);
});