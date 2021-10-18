const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

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
    await sequelize.sync()
    var data = await MonModele.create({
        message: "mon premier message",
        nombre: 7,
    })
    console.log("message crée : ")
    console.log(data.toJSON())

    data = await MonModele.create({
        message: "un autre massage",
        nombre: 3,
    })
    console.log("message crée : ")
    console.log(data.toJSON())

}



initDB().then(async () => {
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
})

console.log("coucou")