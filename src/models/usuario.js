const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = sequelize.define('Usuario', {
    DNI: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Edad: {
        type: DataTypes.INTEGER
    },
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
}, {
    tableName: 'usuario',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

// Hash the password before saving the user
Usuario.beforeSave(async (user) => {
    if (user.changed('Password')) {
        user.Password = await bcrypt.hash(user.Password, 8);
    }
});

// Generate JWT token
Usuario.prototype.generateAuthToken = function() {
    const user = this;
    const token = jwt.sign({ id: user.DNI, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

// Find user by credentials
Usuario.findByCredentials = async (email, password) => {
    const user = await Usuario.findOne({ where: { Email: email } });
    if (!user) {
        throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
        throw new Error('Unable to login');
    }

    return user;
};

module.exports = Usuario;
