import models from '../../../sequelize-init.js';
export default async function handler(req, res) {
  const { Ligas } = models;

  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      console.log('ID:', id);

      if (id) {
        const idNumber = Number(id[0]); 
        console.log('ID as number:', idNumber);

        const liga = await Ligas.findByPk(idNumber);
        console.log('Liga:', liga);

        if (liga) {
          res.status(200).json(liga);
        } else {
          res.status(404).json({ error: 'Liga no encontrado' });
        }
      } else {
        const ligas = await Ligas.findAll();
        res.status(200).json(ligas);
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
      const updated = await Ligas.update(
        { Nombre, Apellido, FechaNacimiento },
        { where: { IdLiga: id } }
      );

      if (updated) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ error: 'Liga no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error Interno del Servidor' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      const deleted = await Ligas.destroy({ where: { IdLiga: id } });

      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Liga no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error Interno del Servidor' });
    }
  } else if (req.method === 'POST') {
    const { Nombre, Apellido, FechaNacimiento } = req.body;

    try {
      const liga = await Ligas.create({ Nombre, Apellido, FechaNacimiento });
      res.status(201).json(liga);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error Interno del Servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}