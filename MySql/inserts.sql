use vrworld;

-- Inserción de usuarios
INSERT INTO USUARIO (DNI, Email, Password, Edad, Nombre) VALUES
('12345678A', 'juan.perez@email.com', 'Jperez123!', 28, 'Juan Pérez'),
('23456789B', 'ana.gomez@email.com', 'Agomez234$', 34, 'Ana Gómez'),
('34567890C', 'luis.martinez@email.com', 'Lmartinez345@', 40, 'Luis Martínez'),
('45678901D', 'maria.lopez@email.com', 'Mlopez456*', 22, 'María López'),
('56789012E', 'jose.rodriguez@email.com', 'Jrodriguez567&', 29, 'José Rodríguez'),
('67890123F', 'paula.sanchez@email.com', 'Psanchez678#', 35, 'Paula Sánchez'),
('78901234G', 'carlos.martin@email.com', 'Cmartin789@', 31, 'Carlos Martín'),
('89012345H', 'sandra.jimenez@email.com', 'Sjimenez890$', 27, 'Sandra Jiménez'),
('90123456I', 'miguel.perez@email.com', 'Mperez901!', 33, 'Miguel Pérez'),
('01234567J', 'carla.moreno@email.com', 'Cmoreno012#', 38, 'Carla Moreno'),
('11223344K', 'alberto.diaz@email.com', 'Adiaz112$', 26, 'Alberto Díaz'),
('22334455L', 'lucia.garcia@email.com', 'Lgarcia223%', 30, 'Lucía García'),
('33445566M', 'javier.morales@email.com', 'Jmorales334&', 32, 'Javier Morales'),
('44556677N', 'ruth.santos@email.com', 'Rsantos445!', 24, 'Ruth Santos'),
('55667788O', 'jorge.ferrera@email.com', 'Jferrera556*', 39, 'Jorge Ferrera'),
('66778899P', 'sofia.martin@email.com', 'Smartin667@', 23, 'Sofía Martín'),
('77889900Q', 'juanita.gonzalez@email.com', 'Jgonzalez778$', 41, 'Juanita González'),
('88990011R', 'pablo.vazquez@email.com', 'Pvazquez889#', 36, 'Pablo Vázquez'),
('99001122S', 'beatriz.flores@email.com', 'Bflores990%', 25, 'Beatriz Flores'),
('10111213T', 'tomás.fernandez@email.com', 'Tfernandez101!', 29, 'Tomás Fernández');

-- Inserción de turistas
INSERT INTO TURISTA (DNI) VALUES
('12345678A'), ('23456789B'), ('34567890C'), ('45678901D'), ('56789012E'),
('67890123F'), ('78901234G'), ('89012345H'), ('90123456I'), ('01234567J'),
('11223344K'), ('22334455L'), ('33445566M'), ('44556677N'), ('55667788O');

-- Inserción de guías
INSERT INTO GUIA (DNI, Salario) VALUES
('66778899P', 2000), ('77889900Q', 1800), ('88990011R', 1700), ('99001122S', 2100), ('10111213T', 1600);

-- Inserción de especializaciones de los guías
INSERT INTO ESP (DNI, esp) VALUES
('66778899P', 'Bosque'), ('77889900Q', 'Museo'), ('88990011R', 'Ruinas'), ('99001122S', 'Playas'), ('10111213T', 'Montañas'),
('66778899P', 'Ruinas'), ('88990011R', 'Playas'), ('77889900Q', 'Montañas');

-- Inserción de tours
INSERT INTO TOUR (ID, Pais, Tipo, Precio, Duracion) VALUES
(1, 'España', 'Bosque', 20, 60),
(2, 'Francia', 'Museo', 30, 90),
(3, 'Italia', 'Ruinas', 20, 45),
(4, 'España', 'Playas', 25, 120),
(5, 'Alemania', 'Montañas', 40, 75),
(6, 'España', 'Bosque', 30, 60),
(7, 'Francia', 'Museo', 40, 105),
(8, 'Grecia', 'Ruinas', 20, 80),
(9, 'España', 'Playas', 35, 100),
(10, 'Italia', 'Montañas', 100, 50),
(11, 'Portugal', 'Bosque', 100, 90),
(12, 'España', 'Museo', 90, 60),
(13, 'Egipto', 'Ruinas', 75, 70),
(14, 'Países Bajos', 'Playas', 100, 90),
(15, 'Francia', 'Montañas', 115, 80),
(16, 'España', 'Bosque', 90, 120),
(17, 'Suecia', 'Museo', 125, 50),
(18, 'Rumanía', 'Ruinas', 95, 60),
(19, 'Italia', 'Playas', 115, 80),
(20, 'España', 'Montañas', 110, 75);

-- Inserción de guías y tours
INSERT INTO GUIA_TOUR (DNI, ID) VALUES
('66778899P', 1), ('77889900Q', 2), ('88990011R', 3), ('99001122S', 4), ('10111213T', 5);

-- Inserción de facturas
INSERT INTO FACTURA (ID, MetodoPago, Fecha, ImporteTotal) VALUES
(1, 'Tarjeta de Crédito', '2024-11-01', 20.00),
(2, 'Transferencia Bancaria', '2024-11-02', 30.50),
(3, 'PayPal', '2024-11-03', 85.75),
(4, 'Stripe', '2024-11-04', 95.00),
(5, 'Tarjeta de Crédito', '2024-11-05', 110.25),
(6, 'Transferencia Bancaria', '2024-11-06', 130.00),
(7, 'PayPal', '2024-11-07', 145.50),
(8, 'Stripe', '2024-11-08', 98.75),
(9, 'Tarjeta de Crédito', '2024-11-09', 115.25),
(10, 'Transferencia Bancaria', '2024-11-10', 122.50),
(11, 'PayPal', '2024-11-11', 99.00),
(12, 'Stripe', '2024-11-12', 105.00),
(13, 'Tarjeta de Crédito', '2024-11-13', 135.50),
(14, 'Transferencia Bancaria', '2024-11-14', 118.75),
(15, 'PayPal', '2024-11-15', 110.00),
(16, 'Stripe', '2024-11-16', 125.00),
(17, 'Tarjeta de Crédito', '2024-11-17', 95.00),
(18, 'Transferencia Bancaria', '2024-11-18', 140.25),
(19, 'PayPal', '2024-11-19', 107.50),
(20, 'Stripe', '2024-11-20', 99.99);

-- insert alquileres 
INSERT INTO ALQUILER (DNI, TourID, FacturaID) VALUES
('12345678A', 6, 10),
('23456789B', 4, 2),
('34567890C', 9, 5),
('45678901D', 7, 3),
('56789012E', 11, 15),
('67890123F', 2, 8),
('78901234G', 15, 12),
('89012345H', 3, 14),
('90123456I', 8, 17),
('01234567J', 5, 18),
('22334455L', 13, 20),
('33445566M', 19, 13),
('44556677N', 12, 7),
('55667788O', 4, 11),
('67890123F', 17, 9),
('78901234G', 18, 16),
('90123456I', 10, 4),
('01234567J', 20, 1),
('55667788O', 14, 19),
('11223344K', 16, 6);



