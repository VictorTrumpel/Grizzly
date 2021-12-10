import sequelize from '../db';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' }
});

export const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autocomplete: true }
});

export const BasketDevice = sequelize.define('basket_device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autocomplete: true }
});

export const Device = sequelize.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autocomplete: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false }
});

export const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autocomplete: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export const Brand = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autocomplete: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export const DeviceInfo = sequelize.define('device_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false }
});

export const TypeBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });
