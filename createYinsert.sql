-- Create Usuario table
CREATE TABLE Usuario (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(255) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    edad INTEGER NOT NULL,
    tipo_dispositivo_vr VARCHAR(255),
    preferencias TEXT[]
);

-- Create Tour table
CREATE TABLE Tour (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    precio FLOAT NOT NULL,
    tipo TEXT[] NOT NULL,
    imagenes TEXT[],
    video VARCHAR(255),
    calificacion_promedio FLOAT DEFAULT 0
);