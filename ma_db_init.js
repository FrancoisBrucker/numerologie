const { Sequelize, DataTypes } = require('sequelize');
path = require('path')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite')
});

const MonModele = sequelize.define('MonModele', {
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    // Other model options go here
});

async function initDB() {
    await sequelize.sync({force: true})
    
    var data = await MonModele.create({
        message: "mon premier message",
        nombre: 7,
    })

    data = await MonModele.create({
        message: "un autre massage",
        nombre: 3,
    })

}

initDB()
    .then(() => {
        console.log("base initalisée")
    })
