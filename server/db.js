import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'hlqpyvin',
  'hlqpyvin',
  'oGy-dNhZTE764sNY4QqHdJuxboXVvafE',
  {
    dialect: 'postgres',
    host: 'batyr.db.elephantsql.com',
    port: '5432'
  }
);

export default sequelize;
