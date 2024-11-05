
import express from 'express';

const app = express();
app.use(express.json());


async function main() {
    try {

        await sequelize.sync();
        app.listen(3000);
        console.log('Server is listening on port', 3000);

    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}
main();