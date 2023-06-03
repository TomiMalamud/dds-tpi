import sqlite from 'sqlite3';
import { open } from 'sqlite';

export default async function CrearBaseSiNoExiste(req, res) {
  const db = await open({
    filename: './data/futbol.db',
    driver: sqlite.Database,
  });

    let existe = false;
    let resultado;

    resultado = await db.get(
      "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'jugadores'",
      []
    );
    if (resultado.contar > 0) existe = true;
    if (!existe) {
      await db.run(
        "CREATE TABLE jugadores( IdJugador INTEGER PRIMARY KEY AUTOINCREMENT, Nombre text NOT NULL, Apellido text NOT NULL, FechaNacimiento text NOT NULL);"
      );
      console.log('Tabla jugadores creada!');
      await db.run(
        "INSERT INTO jugadores VALUES (1,'Leo','Messi', '1990-01-19'),(2,'Lautaro','Martinez','1990-01-25'), (3,'Julian','Alvarez','1995-04-30'),(4,'Miguel','Borja','1996-06-20'),(5,'Leo','Paredes','1989-09-25'),(6,'Santiago','Simon','1987-09-20'), (7,'Nicolas','tagliafico','1988-12-1'),(8,'Alexis','McAllister','1990-08-13'),(9,'Enzo','Fernandez','1997-12-1'),(10,'Paulo','Dybala','1996-10-1');"
      );
    }

    existe = false;
    resultado = await db.get(
      "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'ligas'",
      []
    );
    if (resultado.contar > 0) existe = true;
    if (!existe) {
      await db.run(
        "CREATE TABLE ligas( IdLiga INTEGER PRIMARY KEY AUTOINCREMENT, Nombre text NOT NULL UNIQUE, FechaInicio text NOT NULL);"
      );
      console.log('Tabla de Ligas creada!');
      await db.run(
        "INSERT INTO ligas VALUES (1,'Primera Division', '2023-12-1'),(2,'B Nacional','2023-11-1'),(3,'Premier League','2023-10-16'),(4,'Serie A','2023-04-16'),(5,'La Liga','2024-01-20'),(6,'Bundesliga','2023-10-19'),(7,'Brasileirao','2023-09-15'),(8,'MLS','2023-07-15'),(9,'Serie B','2024-02-18'),(10,'League One','2023-08-13');"
      );
    }

    existe = false;
    const sql =
      "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'equipos'";
    resultado = await db.get(sql, []);
    if (resultado.contar > 0) existe = true;
    if (!existe) {
      await db.run(
        `CREATE TABLE equipos( 
          IdEquipo INTEGER PRIMARY KEY AUTOINCREMENT,
          Nombre text NOT NULL UNIQUE,
          Precio real,
          IdLiga integer,
          CdadJugadores integer,
          FechaAltaEquipo text,
          FOREIGN KEY (IdLiga) REFERENCES ligas(IdLiga)
        );`
      );
      console.log('Tabla Equipos creada!');

      await db.run(
        `INSERT INTO equipos VALUES
        (1,'Manchester City', 299.00, 1, 29,'2017-01-19'),
        (2,'Manchester united', 349.00, 9, 48,'2017-01-31'),
        (3,'Arsenal', 2669.00, 2, 36, '2017-01-12'),
        (4,'Barcelona', 2999.00, 4, 69,'2017-01-30'),
        (5,'Real Madrid',3129.00, 5, 26,'2016-12-28'),
        (6,'Ajax', 3432.00, 6, 32, '2014-12-23'),
        (7,'River Plate',4830.00, 3, 38,'2017-01-01'),
        (8,'Boca Juniors',5405.00, 10, 50,'2017-01-18'),
        (9,'Bayern Munchen',5290.00, 7, 51,'2017-02-03'),
        (10,'Inter de Milan',4837.00, 8, 28,'2016-12-25')
        ;`
      );
    }

    existe = false;
    res = await db.get(
      "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'copa'",
      []
    );
    if (resultado.contar > 0) existe = true;
    if (!existe) {
      await db.run(
        "CREATE table copa( IdCopa INTEGER PRIMARY KEY AUTOINCREMENT, Nombre text NOT NULL UNIQUE, FechaInicioCopa text NOT NULL);"
      );
      console.log("tabla de Copas creada!");
      await db.run(
        "insert into copa values (1,'Copa Libertadores', '2020-12-1'),(2,'Copa Sudamericana','2020-11-1'),(3,'champions League','2023-10-16'),(4,'Mundial de Clubes','2020-04-16'),(5,'Copa Del Rey','2020-01-20'),(6,'Copa Alemana','2020-10-19'),(7,'Copa Argentina','2020-09-15'),(8,'EuroCopa','2020-07-15'),(9,'Conferences','2020-02-18'),(10,'Copa Africana','2023-08-13');"
      );
    }

    existe = false
    res = await db.get(
      "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'estadios'",
      []
    );
    if (resultado.contar > 0) existe = true;
    if (!existe) {
      await db.run(
        "CREATE TABLE estadios( IdEstadio INTEGER PRIMARY KEY AUTOINCREMENT, Nombre text NOT NULL, FechaInauguracion text NOT NULL);"
      );
      console.log('Tabla de Estadios creada!');
      await db.run(
        "INSERT INTO estadios VALUES (1,'Monumental', '1900-01-19'),(2,'Bombonera','1900-01-25'), (3,'Camp Nou','1905-04-30'),(4,'Santiago Bernabeu','1906-06-20'),(5,'Wanda Metropolitano','1909-09-25'),(6,'Allianz Arena','1907-09-20'), (7,'Maracana','1908-12-1'),(8,'Wembley','1900-08-13'),(9,'Anfield','1907-12-1'),(10,'Duco','1996-10-1');"
      );
    }
}
CrearBaseSiNoExiste();