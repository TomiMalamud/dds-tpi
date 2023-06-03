import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function MostarBaseDeDatos() {
  const db = await open({
    filename: './data/futbol.db',
    driver: sqlite3.Database,
  });

  const jugadores = await db.all('SELECT * FROM jugadores');
  const ligas = await db.all('SELECT * FROM ligas');
  const equipos = await db.all('SELECT * FROM equipos');
  const copas = await db.all('SELECT * FROM copa');
  const estadios = await db.all('SELECT * FROM estadios');

  // Log the database contents
  console.log('Jugadores:', jugadores);
  console.log('Ligas:', ligas);
  console.log('Equipos:', equipos);
  console.log('Copas:', copas);
  console.log('Estadios:', estadios);

  // Close the database connection
  await db.close();

  return {
    props: {
      jugadores,
      ligas,
      equipos,
      copas,
      estadios,
    },
  };
}
