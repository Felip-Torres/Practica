const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

// Generar y guardar el archivo swagger.json
const saveSwaggerSpec = () => {
    const outputPath = path.join(__dirname, '../', 'swagger.json'); // Puedes cambiar la ruta aquí
    fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));  // Guardar el archivo JSON
    console.log('Archivo swagger.json generado con éxito en: ' + outputPath);
};

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuarios',
            version: '1.0.0',
            description: 'Documentación de la API con Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['src\\controllers\\authController.js', 'src\\routes\\*.js'], // Apunta a los archivos de rutas para documentarlos
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
    saveSwaggerSpec();  // Genera el archivo
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Documentación disponible en: http://localhost:3000/api-docs');
};

module.exports = setupSwagger;
