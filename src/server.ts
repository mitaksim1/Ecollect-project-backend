import express from 'express';

const app = express();

const users = [
    'Miriam',
    'Martin',
    'Kenzo'
];

/**
 * Liste tous les utilisateurs
 */
app.get('/users', (request, response) => {
    console.log('Liste des utilisateurs');

    return response.json(users);
});

/**
 * Liste un utilisateur selon son id
 */
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

/**
 * Création d'un utilisateur
 */
app.post('/users', (request, response) => {
    const user = {
        name: 'Miriam',
        email: 'miriam@miriam.com.br'
    };

    return response.json(user);
});

app.listen(3333);

