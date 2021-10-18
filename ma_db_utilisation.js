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

async function utilisation() {
    console.log("Lecture id = 1 :")
    data = await MonModele.findByPk(1);
    console.log(data.toJSON())

    console.log("---------")
    console.log("clé primaire : ", data.id)
    console.log("message : ", data.message)
    console.log("nombre : ", data.nombre)
    console.log("date de création création : ", data.createdAt)
    console.log("dernière modification : ", data.updatedAt)
    console.log("---------")

    console.log("Lecture id qui n'existe pas :")
    data = await MonModele.findByPk(42);
    console.log(data) // n'existe pas

    console.log("Lecture tous les éléments :")
    data = await MonModele.findAll();
    for (element of data) {
        console.log(element.toJSON())
    }

    console.log("Lecture requête :")
    data = await MonModele.findAll({
        where: {
            nombre: 3
        }
    });
    for (element of data) {
        console.log(element.toJSON())
    }
}

utilisation()

