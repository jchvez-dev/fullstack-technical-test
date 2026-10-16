--- SEED
CREATE TABLE ALUMNO (
    id INT PRIMARY KEY,
    Nombres VARCHAR(50),
    Apellidos VARCHAR(50),
    Carrera VARCHAR(50)
);
INSERT INTO ALUMNO (id, Nombres, Apellidos, Carrera) VALUES 
(1, 'Rosa', 'Torres', 'Sistemas'),
(2, 'Angel', 'Perez', 'Electronica'),
(3, 'Sonia', 'Ríos', 'Industrial');

CREATE TABLE LIBRO (
    Id INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Editorial VARCHAR(50),
    Dias_limite_prestamo INT
);
INSERT INTO LIBRO (Id, Nombre, Editorial, Dias_limite_prestamo) VALUES 
(1, 'Administración', 'Norma', 30),
(2, 'Redes neuronales', 'Santillana', 30),
(3, 'Estadistica', 'Regio', 10),
(4, 'Desarrollo web', 'Limusa', 10);


CREATE TABLE PRESTAMO (
    Id INT PRIMARY KEY,
    Id_alumno INT,
    Id_libro INT,
    Fecha_prestamo DATE,
    Entregado BOOLEAN,
    FOREIGN KEY (Id_alumno) REFERENCES ALUMNO(id),
    FOREIGN KEY (Id_libro) REFERENCES LIBRO(Id)
);
INSERT INTO PRESTAMO (Id, Id_alumno, Id_libro, Fecha_prestamo, Entregado) VALUES 
(1, 1, 1, STR_TO_DATE('23/7/2021', '%d/%m/%Y'), FALSE),
(2, 1, 2, STR_TO_DATE('22/7/2021', '%d/%m/%Y'), FALSE),
(3, 1, 3, STR_TO_DATE('15/6/2021', '%d/%m/%Y'), FALSE),
(4, 2, 1, STR_TO_DATE('12/7/2021', '%d/%m/%Y'), FALSE),
(5, 3, 1, STR_TO_DATE('28/7/2021', '%d/%m/%Y'), TRUE),
(6, 3, 2, STR_TO_DATE('16/7/2021', '%d/%m/%Y'), TRUE),
(7, 3, 3, STR_TO_DATE('28/7/2021', '%d/%m/%Y'), TRUE),
(8, 3, 4, STR_TO_DATE('10/5/2021', '%d/%m/%Y'), FALSE),
(9, 2, 2, STR_TO_DATE('28/7/2021', '%d/%m/%Y'), FALSE),
(10, 3, 2, STR_TO_DATE('5/4/2021', '%d/%m/%Y'), FALSE);

--- QUERY
SELECT 
    L.Nombre AS Libro,
    P.Fecha_prestamo,
    L.Dias_limite_prestamo,
    DATE_ADD(P.Fecha_prestamo, INTERVAL L.Dias_limite_prestamo DAY) AS Fecha_vencimiento
FROM PRESTAMO P
INNER JOIN ALUMNO A ON P.Id_alumno = A.id
INNER JOIN LIBRO L ON P.Id_libro = L.Id
WHERE A.Nombres = 'Sonia'
  AND P.Entregado = FALSE
  AND DATE_ADD(P.Fecha_prestamo, INTERVAL L.Dias_limite_prestamo DAY) < STR_TO_DATE('30/07/2021', '%d/%m/%Y');
