import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Liste des utilisateurs');

    response.json([
        'Miriam',
        'Martin',
        'Kenzo',
    ]);
});

app.listen(3333);

