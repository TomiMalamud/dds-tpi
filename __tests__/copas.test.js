import request from 'supertest';
import server from 'nextjs-http-supertest'; // Librería para testing de Next.js con supertest.

describe('GET /api/jugadores/:id', () => {

  afterAll(() => {
    server.close(); // IMPORTANTE: Cerrar el servidor tipeando "q" en la terminal al terminar los tests
  })

  it('Deberia devolver el jugador con el id 2', async () => {
    const r = await request(server).get('/api/jugadores/2');
    expect(r.statusCode).toEqual(200);
    expect(r.body).toEqual(
      expect.objectContaining({
        Nombre: expect.any(String),
        Apellido: expect.any(String),
        FechaNacimiento: expect.any(String),
      })
    );
  })
})

describe('GET /api/jugadores', () => {

  afterAll(() => {
    server.close(); // IMPORTANTE: Cerrar el servidor tipeando "q" en la terminal al terminar los tests
  })

  it('Deberia devolver todos los jugadores', async () => {
    const r = await request(server).get('/api/jugadores');
    expect(r.statusCode).toEqual(200);
    expect(r.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          Nombre: expect.any(String),
          Apellido: expect.any(String),
          FechaNacimiento: expect.any(String),
        }),
      ])
    );
  })
})

describe('PUT /api/jugadores/:id', () => {

  afterAll(() => {
    server.close(); // IMPORTANTE: Cerrar el servidor tipeando "q" en la terminal al terminar los tests
  })

  it('Deberia devolver un jugador actualizado', async () => {
    const r = await request(server).put('/api/jugadores/5').send({
      Nombre: 'JuanASOO',
      Apellido: 'Perez',
      FechaNacimiento: '1990-01-01',
    });
    expect(r.statusCode).toEqual(200);
  })
})

describe('POST /api/jugadores', () => {

  afterAll(() => {
    server.close(); // IMPORTANTE: Cerrar el servidor tipeando "q" en la terminal al terminar los tests
  })

  it('Deberia crear un nuevo jugador', async () => {
    const jugador = {
      Nombre: 'Carlos',
      Apellido: 'Gonzalez',
      FechaNacimiento: '1985-05-10',
    };

    const r = await request(server).post('/api/jugadores').send(jugador);
    expect(r.statusCode).toEqual(201);
    expect(r.body).toEqual(
      expect.objectContaining({
        Nombre: expect.any(String),
        Apellido: expect.any(String),
        FechaNacimiento: expect.any(String),
      })
    );    
  })
})

describe('DELETE /api/jugadores/:id', () => {
  
    afterAll(() => {
      server.close(); // IMPORTANTE: Cerrar el servidor tipeando "q" en la terminal al terminar los tests
    })
  
    it('Deberia devolver un status 204', async () => {
      const borrarJugador = {
        Nombre: 'Jugador',
        Apellido: 'Prueba',
        FechaNacimiento: '2000-01-01',
      };
      const generarRespuesta = await request(server).post('/api/jugadores').send(borrarJugador);
      const IdBorrar = generarRespuesta.body.IdJugador;
    
      const r = await request(server).delete(`/api/jugadores/${IdBorrar}`);
      expect(r.statusCode).toEqual(204);
    });    
  })