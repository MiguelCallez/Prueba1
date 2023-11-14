require('dotenv').config();
module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    mysql:{
        host: process.env.mysql_host || 'localhost',
        user: process.env.module_User || 'root',
        password: process.env.mysql_Password || '',
        database: process.env.mysql_DB || 'prueba'
    }
}