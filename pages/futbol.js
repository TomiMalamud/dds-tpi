import MostarBaseDeDatos from './mostrar-db';
import Link from 'next/link';
// test

export default function BaseDatos({ jugadores, ligas, equipos, copas, estadios }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1>Jugadores</h1>
        <ul>
          {jugadores.map((jugador) => (
            <li key={jugador.IdJugador}>
              <Link href={`/api/jugadores/${jugador.IdJugador}`}>
                {jugador.Nombre} {jugador.Apellido}
              </Link>
            </li>
          ))}
        </ul>

        <h1>Ligas</h1>
        <ul>
          {ligas.map((liga) => (
            <li key={liga.IdLiga}>
            <Link href={`/api/ligas/${liga.IdLiga}`}>
                {liga.Nombre} {liga.FechaInicio}
              </Link></li>
          ))}
        </ul>

        <h1>Equipos</h1>
        <ul>
          {equipos.map((equipo) => (
            <li key={equipo.IdEquipo}>{equipo.Nombre}</li>
          ))}
        </ul>

        <h1>Copas</h1>
        <ul>
          {copas.map((copa) => (
            <li key={copa.IdCopa}>{copa.Nombre}</li>
          ))}
        </ul>

        <h1>Estadios</h1>
        <ul>
          {estadios.map((estadio) => (
            <li key={estadio.IdEstadio}>{estadio.Nombre}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return await MostarBaseDeDatos();
}
