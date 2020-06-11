import express from 'express';
// Pour pouvoir se connecter à notre bdd, on doit importer le fichier connection
import knex from './database/connection';

const routes = express.Router();

/**
 * Liste tous les utilisateurs
 */
routes.get('/items', async (request, response) => {
    // requête à la bdd
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
        
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
    const { name, email, telephone, latitude, longitude, city, region, items } = request.body;

    const insertedPointsIds = await knex('points').insert({
        image: 'image-fake',
        name,
        email, 
        telephone,
        latitude, 
        longitude,
        city,
        region
    });

    const point_id = insertedPointsIds[0];

    // Pour associer un point avec un/plusieus item(s)
    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id
        };
    })

    await knex('point_items').insert(pointItems);


    return response.json({ success: true });
});

export default routes;