import { Sequelize} from 'sequelize';


// Connect to MySQL server
const sequelize_create_DB = new Sequelize('mysql://root:root@localhost:3306');
// Create the database named "DBTest001"
sequelize_create_DB.query('CREATE DATABASE IF NOT EXISTS DBTest001')
  .then(() => {
    console.log('Database created successfully!');
  })
  .catch((err) => {
    console.error('Error creating database:', err);
  });

// Create connection to the database
const sequelize = new Sequelize('DBTest001','root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define a model for the table
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    
    // Create a new user
    User.create({
      name: 'John Doe',
      email: 'john.doe@example.com'
    }).then(user => {
      console.log(user.toJSON());
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
