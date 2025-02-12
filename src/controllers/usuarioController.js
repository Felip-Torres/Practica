const Usuario  = require('../models/usuario');

// Registrar un nuevo usuario
exports.register = async (req, res) => {
    try {
        const { DNI, Email, Password, Edad, Nombre } = req.body;
        const newUser = await Usuario.create({ DNI, Email, Password, Edad, Nombre });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
};

// Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll(); // Obtiene todos los usuarios
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ message: "Error al obtener los usuarios", error });
    }
};

// Obtener un usuario por DNI
exports.getUsuarioByDni = async (req, res) => {
    try {
        const user = await Usuario.findOne({ where: { DNI: req.params.dni } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};

// Actualizar un usuario
exports.updateUsuario = async (req, res) => {
    try {
        const { Email, Password, Edad, Nombre } = req.body;
        const dni = req.params.dni;

        const camposActualizados = {};
        if (Email) camposActualizados.Email = Email;
        if (Password) camposActualizados.Password = Password;
        if (Edad) camposActualizados.Edad = Edad;
        if (Nombre) camposActualizados.Nombre = Nombre;

        // Verifica si hay campos para actualizar
        if (Object.keys(camposActualizados).length === 0) {
            return res.status(400).json({ message: "No hay datos para actualizar" });
        }

        const updatedUser = await Usuario.update(camposActualizados, { where: { DNI: dni } });

        if (updatedUser[0] === 0) {
            return res.status(404).json({ message: "Usuario no encontrado o sin cambios" });
        }

        res.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el usuario", error });
    }
};

// Eliminar un usuario
exports.deleteUsuario = async (req, res) => {
    try {
        const { dni } = req.params;
        const deletedUser = await Usuario.destroy({ where: { dni } });
        if (deletedUser === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
};
