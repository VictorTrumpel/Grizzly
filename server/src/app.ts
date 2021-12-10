require('dotenv').config();
import { User } from './models/models';
import * as express from 'express';
import { Express, Request, Response } from 'express';
import sequelize from '../db';
import cors from 'cors';
import router from './routes';
const PORT = process.env.PORT;
const app: Express = express();
import { ErrorHandlingMiddleware } from './middleware/ErrorHandlingMiddleware';

app.use(cors());
app.use(express.json());
app.use(process.env.API_URL || '', router);

// Обработка ошибок
app.use(ErrorHandlingMiddleware);

app.get('/', (req: Request, res: Response) => {
  console.log('ПОШЕЛ GET запрос');
  console.log('Тест системы');
  res.status(200).json({ message: 'WORKING!!!!' });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () =>
      console.log(`SERVER started on port http://localhost:${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
