import models from '../../../sequelize-init.js';
export default async function handler(req, res) {
  const { Jugadores } = models;

  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      console.log('ID:', id);

      if (id) {
        const idNumber = Number(id[0]); // Convert the first element of the array to a number
        console.log('ID as number:', idNumber);

        const jugador = await Jugadores.findByPk(idNumber);
        console.log('Jugador:', jugador);

        if (jugador) {
          res.status(200).json(jugador);
        } else {
          res.status(404).json({ error: 'Jugador no encontrado' });
        }
      } else {
        const jugadores = await Jugadores.findAll();
        res.status(200).json(jugadores);
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error Interno del Servidor' });
    }
  }

else if (req.method === 'PUT') {
    const { id } = req.query;
    const { Nombre, Apellido, FechaNacimiento } = req.body;

    try {
      const updated = await Jugadores.update(
        { Nombre, Apellido, FechaNacimiento },
        { where: { IdJugador: id } }
      );

      if (updated) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ error: 'Jugador no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error Interno del Servidor' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      const deleted = await Jugadores.destroy({ where: { IdJugador: id } });

      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Jugador no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error Interno del Servidor' });
    }
  } else if (req.method === 'POST') {
    const { Nombre, Apellido, FechaNacimiento } = req.body;

    try {
      const jugador = await Jugadores.create({ Nombre, Apellido, FechaNacimiento });
      res.status(201).json(jugador);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error Interno del Servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}