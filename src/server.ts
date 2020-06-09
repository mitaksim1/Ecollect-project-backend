import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'Miriam',
    'Martin',
    'Kenzo'
];

/**
 * Liste tous les utilisateurs
 */
app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
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
    const data = request.body;
    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
});

app.listen(3333);

