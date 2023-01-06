import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import router from './controller/Routes.js';
import currencyRoutes from './quotes/routes/CurrencyRoutes.js'

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(currencyRoutes)


app.listen(PORT, () => console.log(`Api rodando rodando na porta ${PORT}`));


https.createServer({
          cert: fs.readFileSync('src/SSL/code.crt'),
          key: fs.readFileSync('src/SSL/code.key')
      }, app).listen(3001, ()=>console.log('Rodando em https'));
      