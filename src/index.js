const mysql = require('mysql2');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'userpassword',
  database: 'my_database'
});

// Conectar a la base de datos


const sql = "INSERT INTO usuarios (nombre, email) VALUES (?, ?)";
connection.execute(sql, ['Juan Pérez', 'juan@example.com'], (err, result) => {
  if (err) {
    console.error('Error al insertar datos: ' + err);
    return;
  }
  console.log('Datos insertados correctamente: ', result);
});