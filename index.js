import { Sequelize, Model, DataTypes } from 'sequelize';
import winston from 'winston';

// Define logger
const logger = winston.createLogger({
  level: 'debug',
  transports: [new winston.transports.Console()],
});

// Option 1: Passing a connection URI
//const sequelize_sqlite = new Sequelize('sqlite::memory:') // Example for sqlite
//const sequelize_postgres = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize_sqlite_local = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/fiddle.sqlite3'
});


// // Option 3: Passing parameters separately (other dialects)
// const sequelize_selected = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

// try {
//   await sequelize_sqlite_local.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

class MyTable extends Model {}

// // MyTable = sequelize_sqlite_local.define('MyTable', {
// //   id: {
// //     type: DataTypes.INTEGER,
// //     primaryKey: true,
// //     autoIncrement: true
// //   },
// //   name: {
// //     type: DataTypes.STRING
// //   },
// //   age: {
// //     type: DataTypes.INTEGER
// //   }
// // });

// // (async () => {
// //   await sequelize_sqlite_local.sync({ force: true }); // create the table in the database
// //   console.log('MyTable created successfully!');
// // })();

MyTable.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: sequelize_sqlite_local,
  modelName: 'MyTable'
});

(async () => {
  try {
    await sequelize_sqlite_local.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize_sqlite_local.sync({ force: true });
    console.log('MyTable created successfully!');

    const createdRecord = await MyTable.create({
      name: 'John Doe',
      age: 30
    });

    console.log('Created record:', createdRecord.toJSON());

    const allRecords = await MyTable.findAll();
    console.log('All records:', allRecords.map(record => record.toJSON()));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize_sqlite_local.close();
  }
})();

// MyTable.sync()
//   .then(() => {
//     return MyTable.findAll();
//   })
//   .then((myTables) => {
//     console.log(myTables);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


//   (async () => {
//     try {
//       await sequelize_sqlite_local.authenticate();
//       console.log('Connection has been established successfully.'); 
//       await sequelize_sqlite_local.sync({ force: true });
//       console.log('MyTable created successfully!');
  
//       const data = await MyTable.findAll();
//       console.log(data);
//     } catch (error) {
//       console.error('Unable to connect to the database:', error);
//     } finally {
//       await sequelize_sqlite_local.close();
//     }
//   })();

// const sequelize = new Sequelize('sqlite::memory:', {
//   // Choose one of the logging options
//   logging: console.log,                  // Default, displays the first parameter of the log function call
//   logging: (...msg) => console.log(msg), // Displays all log function call parameters
//   logging: false,                        // Disables logging
//   logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
//   logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages
// });