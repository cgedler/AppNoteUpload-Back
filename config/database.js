
import Sequelize from 'sequelize';
import config from './environmentconfig.js';


function getMSSql() {
    const sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
        host: config.database.host,
        port: config.database.port,
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: config.database.encrypt
            }
        }
    });
    return sequelize;
}

function getMySql() {
    const sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
        host: config.database.host,
        port: config.database.port,
        dialect: 'mysql',
        dialectOptions: {
            options: {
                encrypt: config.database.encrypt
            }
        }
    });
    return sequelize;
}

function getPostgres() {
    const sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
        host: config.database.host,
        port: config.database.port,
        dialect: 'postgres',
        dialectOptions: {
            options: {
                encrypt: config.database.encrypt
            }
        }
    });
    return sequelize;
}


function getSQLite() {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: config.database.path
    });
    return sequelize;
}



switch(config.database.dialect) {
  case 'sqlite':
    sequelize = getSQLite();
    break;
  case 'mssql':
    sequelize = getMSSql();
    break;
  case 'postgres':
    sequelize = getPostgres();
    break;
  case 'mysql':
    sequelize = getMySql();
    break;
  default:
    console.error('Unable to connect to the database - HandlerDB');
}


export default sequelize;