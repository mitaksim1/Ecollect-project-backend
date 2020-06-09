import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const users = [
    'Miriam',
    'Martin',
    'Kenzo'
];

app.listen(3333);

