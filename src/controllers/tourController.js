const Sequelize = require('sequelize');
const Tour = require('../models/tour');


//http://localhost:3000/api/tours/?Pais=España&Tipo=Bosque&duracionMin=4&precioMax=100&precioMin=20&duracionMax=90
// Obtener todos los tours(Con filtros)
exports.getAllTours = async (req, res) => {
    try {
        // Extraer los filtros del body (si existen)
        const { Pais, Tipo, duracionMin, duracionMax, precioMin, precioMax } = req.query;

        const filtros = {};
        
        // Filtro por Pais
        if (Pais) {
            filtros.Pais = { [Sequelize.Op.like]: `%${Pais}%` };
        }

        // Filtro por Tipo (solo aceptar valores válidos)
        if (Tipo) {
            filtros.Tipo = { [Sequelize.Op.like]: `%${Tipo}%` };  // Solo se filtra si el Tipo es válido
        }

        // Filtro por Duración (min y max)
        if (duracionMin) {
            filtros.Duracion = { [Sequelize.Op.gte]: parseInt(duracionMin, 10) };
        }
        if (duracionMax) {
            // Si ya se ha añadido un filtro para 'Duracion', lo combinamos con el máximo
            filtros.Duracion = filtros.Duracion || {};
            filtros.Duracion[Sequelize.Op.lte] = parseInt(duracionMax, 10);
        }

        // Filtro por Precio (min y max)
        if (precioMin) {
            filtros.Precio = { [Sequelize.Op.gte]: parseFloat(precioMin) };
        }
        if (precioMax) {
            // Si ya se ha añadido un filtro para 'Precio', lo combinamos con el máximo
            filtros.Precio = filtros.Precio || {};
            filtros.Precio[Sequelize.Op.lte] = parseFloat(precioMax);
        }

        console.log(filtros);  // Verifica los filtros generados

        // Obtener los tours con los filtros aplicados
        const tours = await Tour.findAll({ where: filtros });

        // Verificar si se encontraron tours
        if (tours.length === 0) {
            return res.status(404).json({ message: 'No se encontraron tours con los filtros especificados' });
        }

        res.status(200).json(tours);  // Devolver los tours encontrados
    } catch (error) {
        console.error("Error al obtener los tours:", error);
        res.status(500).json({ message: "Error al obtener los tours", error });
    }
};

// Obtener un tour por ID
exports.getTourById = async (req, res) => {
    try {
        const tour = await Tour.findOne({ where: { ID: req.params.id } });
        if (!tour) {
            return res.status(404).json({ message: 'Tour no encontrado' });
        }
        res.status(200).json(tour);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el tour', error });
    }
};
