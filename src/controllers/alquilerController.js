const Alquiler = require('../models/alquiler');
const Turista = require('../models/turista');
const Tour = require('../models/tour');
const Factura = require('../models/factura');
const Guia = require('../models/guia');
const { sequelize } = require('../models');

exports.createAlquiler = async (req, res) => {
    const transaction = await sequelize.transaction();  // Crear la transacción

    try {
        let DNI = req.body.DNI;
        const { TourID, ID, MetodoPago } = req.body;

        const guia = await Guia.findOne({ where: { DNI: req.user.DNI } });
        if (!guia && DNI === undefined) {
            DNI = req.user.DNI;
        }

        // Verificar si el turista y el tour existen
        const turista = await Turista.findByPk(DNI);
        const tour = await Tour.findByPk(TourID);

        if (!turista || !tour) {
            return res.status(404).json({ message: 'Turista o Tour no encontrados' });
        }

        // Crear la factura con los datos correctos dentro de la transacción
        const nuevaFactura = await Factura.create({
            ID,
            MetodoPago,
            Fecha: new Date(),
            ImporteTotal: tour.Precio
        }, { transaction });  // Pasamos la transacción aquí

        // Crear el alquiler y vincular la factura generada dentro de la misma transacción
        const alquiler = await Alquiler.create({
            DNI,
            TourID,
            FacturaID: nuevaFactura.ID
        }, { transaction });  // Pasamos la transacción aquí

        // Si todo va bien, confirmamos la transacción
        await transaction.commit();

        res.status(201).json({ message: 'Alquiler registrado exitosamente', alquiler, factura: nuevaFactura });

    } catch (error) {
        // Si ocurre un error, hacemos un rollback para revertir todas las operaciones de la transacción
        await transaction.rollback();

        console.error('Error al registrar el alquiler:', error);
        res.status(500).json({ message: 'Error al registrar el alquiler', error });
    }
};

// Obtener todos los alquileres
exports.getAllAlquileres = async (req, res) => {
    try {
        const alquileres = await Alquiler.findAll({
            include: [
                { model: Turista, as: 'Turista' },
                { model: Tour, as: 'Tour' },
                { model: Factura, as: 'Factura' }
            ]
        });
        res.status(200).json(alquileres);
    } catch (error) {
        console.error('Error al obtener los alquileres:', error);
        res.status(500).json({ message: 'Error al obtener los alquileres', error });
    }
};

// Obtener alquiler por DNI y TourID
exports.getAlquilerById = async (req, res) => {
    try {
        const { DNI, TourID } = req.params;
        const alquiler = await Alquiler.findOne({ where: { DNI, TourID } });

        if (!alquiler) {
            return res.status(404).json({ message: 'Alquiler no encontrado' });
        }

        res.status(200).json(alquiler);
    } catch (error) {
        console.error('Error al obtener el alquiler:', error);
        res.status(500).json({ message: 'Error al obtener el alquiler', error });
    }
};

// Eliminar un alquiler
exports.deleteAlquiler = async (req, res) => {
    try {
        const { DNI, TourID } = req.params;
        const result = await Alquiler.destroy({ where: { DNI, TourID } });

        if (result === 0) {
            return res.status(404).json({ message: 'Alquiler no encontrado' });
        }

        res.status(200).json({ message: 'Alquiler eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el alquiler:', error);
        res.status(500).json({ message: 'Error al eliminar el alquiler', error });
    }
};
