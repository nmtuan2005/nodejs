const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'store',
    'root',
    'Tuan@123',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306',
        dialectOptions: {
          connectTimeout: 60000
        },
        logging: false
    }
)

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

connection()