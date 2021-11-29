const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CommentedSong extends Model { }

CommentedSong.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'commentedSong',
    }
)

module.exports = CommentedSong;