const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('test_db', 'test', 'pass1234', {
  host: 'localhost',
  dialect: 'mysql'
});

const connAuth  = async function(sequelize) {
    try {
        await sequelize.authenticate;
        console.log("Connection has been established!");
    } catch (error) {
        console.log("error: Couldn't establish a connection");
    }
}

connAuth(sequelize);

const Region = sequelize.define('region', {
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

sequelize.sync();

module.exports = Region;