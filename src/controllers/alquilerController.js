const Alquiler = require('../models/alquiler');
const Turista = require('../models/turista');
const Tour = require('../models/tour');
const Factura = require('../models/factura');

exports.createAlquiler = async (req, res) => {
    try {
        const { DNI, TourID, MetodoPago } = req.body;

        // Verificar si el turista y el tour existen
        const turista = await Turista.findByPk(DNI);
        const tour = await Tour.findByPk(TourID);

        if (!turista || !tour) {
            return res.status(404).json({ message: 'Turista o Tour no encontrados' });
        }

        // Crear la factura con los datos correctos
        const nuevaFactura = await Factura.create({
            MetodoPago,           // Método de pago enviado en la solicitud
            Fecha: new Date(),    // Fecha actual
            ImporteTotal: tour.Precio // Precio del tour
        });

        // Crear el alquiler y vincular la factura generada
        const alquiler = await Alquiler.create({ 
            DNI, 
            TourID, 
            FacturaID: nuevaFactura.ID
        });

        res.status(201).json({ message: 'Alquiler registrado exitosamente', alquiler, factura: nuevaFactura });

    } catch (error) {
        console.error('Error al registrar el alquiler:', error);
        res.status(500).json({ message: 'Error al registrar el alquiler', error });
    }
};

// Obtener todos los alquileres
exports.getAllAlquileres = async (req, res) => {
    try {
        const alquileres = await Alquiler.findAll({
            include: [Turista, Tour, Factura]
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
