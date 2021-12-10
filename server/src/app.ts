require('dotenv').config();
import express from 'express';
import sequelize from '../db';
import { User } from '../models/models';

const PORT = 4000;

const app = express();

console.log(process.env.DB_HOST);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
