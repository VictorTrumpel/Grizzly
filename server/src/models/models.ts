import sequelize from '../../db';
import { ArtistModel } from './ArtistModel';
import { SongModel } from './SongModel';
import { DataTypes, Model, Optional } from 'sequelize';

export const Song = sequelize.define<
  Model<SongModel, Optional<SongModel, 'id'>>
>('song', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  artistName: { type: DataTypes.STRING, allowNull: false },
  artistId: { type: DataTypes.INTEGER, allowNull: false },
  src: { type: DataTypes.STRING, allowNull: false }
});

export const Artist = sequelize.define<
  Model<ArtistModel, Optional<ArtistModel, 'id' | 'role'>>
>('artist', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  nickname: { type: DataTypes.STRING, unique: true, allowNull: false },
  avatar: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'USER' }
});

Artist.hasMany(Song);
Song.belongsTo(Artist);
