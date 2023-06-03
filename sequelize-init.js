import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize(`sqlite:./data/futbol.db`);

// Define el modelo de datos Jugadores
const Jugadores = sequelize.define(
  'jugadores',
  {
    IdJugador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nombre jugador es requerido',
        },
        len: {
          args: [5, 15],
          msg: 'Nombre jugador debe ser tipo caracteres, entre 5 y 15 de longitud',
        },
      },
    },
    Apellido: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Apellido es requerido',
        },
        len: {
          args: [5, 15],
          msg: 'Apellido debe ser tipo caracteres, entre 5 y 15 de longitud',
        },
      },
    },
    FechaNacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Fecha nacimiento es requerida',
        },
      },
    },
  },
  {
    hooks: {
      beforeValidate: (jugador) => {
        if (typeof jugador.Nombre === 'string') {
          jugador.Nombre = jugador.Nombre.toUpperCase().trim();
        }
        if (typeof jugador.Apellido === 'string') {
          jugador.Apellido = jugador.Apellido.toUpperCase().trim();
        }
      },
    },
    timestamps: false,
  }
);

// Define el modelo de datos Ligas
const Ligas = sequelize.define(
  'ligas',
  {
    IdLiga: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nombre liga es requerido',
        },
        len: {
          args: [5, 15],
          msg: 'Nombre liga debe ser tipo caracteres, entre 5 y 15 de longitud',
        },
      },
    },
    FechaInicio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Fecha inicio es requerida',
        },
      },
    },
  },
  {
    hooks: {
      beforeValidate: (liga) => {
        if (typeof liga.Nombre === 'string') {
          liga.Nombre = liga.Nombre.toUpperCase().trim();
        }
      },
    },
    timestamps: false,
  }
);

// Define el modelo de datos Equipos
const Equipos = sequelize.define(
  'equipos',
  {
    IdEquipo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nombre equipo es requerido',
        },
        len: {
          args: [5, 30],
          msg: 'Nombre equipo debe ser tipo caracteres, entre 5 y 30 de longitud',
        },
      },
      unique: {
        args: true,
        msg: 'Este Nombre ya existe en la tabla!',
      },
    },
    Precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Precio es requerido',
        },
      },
    },
    IdLiga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'IdLiga es requerido',
        },
      },
    },
    CdadJugadores: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Cantidad de jugadores es requerido',
        },
      },
    },
    FechaAltaEquipo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Fecha Alta del equipo es requerida',
        },
      },
    },
  },
  {
    hooks: {
      beforeValidate: (equipo) => {
        if (typeof equipo.Nombre === 'string') {
          equipo.Nombre = equipo.Nombre.toUpperCase().trim();
        }
      },
    },
    timestamps: false,
  }
);
//Define el modelo de datos de copa
const Copas = sequelize.define(
  "copa",
  {
    IdCopa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre copa es requerido",
        },
        len: {
          args: [5, 15],
          msg: "Nombre copa debe ser tipo carateres, entre 5 y 15 de longitud",
        },
      },
    },

    FechaInicioCopa: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Fecha inicio copa es requerida",
          }
        }
      },
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (copa, options) {
        if (typeof copa.Nombre === "string") {
          copa.Nombre = copa.Nombre.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);
// Define el modelo de datos de estadios
const Estadios = sequelize.define(
  'Estadios',
  {
    IdEstadio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nombre Estadio es requerido',
        },
        len: {
          args: [5, 15],
          msg: 'Nombre Estadio debe ser tipo caracteres, entre 5 y 15 de longitud',
        },
      },
    },
    FechaInauguracion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Fecha Inauguracion es requerida',
        },
      },
    },
  },
  {
    hooks: {
      beforeValidate: (estadio) => {
        if (typeof estadio.Nombre === 'string') {
          estadio.Nombre = estadio.Nombre.toUpperCase().trim();
        }
      },
    },
    timestamps: false,
  }
);


export default {
  sequelize,
  Jugadores,
  Ligas,
  Equipos,
  Copas,
  Estadios,
};
