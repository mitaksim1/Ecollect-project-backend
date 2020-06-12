import { Request, Response } from 'express';
import knex from '../database/connection';

/**
 * Création d'un point de collecte
 */
class PointsController {
    // Affiche un seul point de collecte
    async show(request: Request, response: Response) {
       // const id = request.params.id
       const { id } = request.params;

       const point = await knex('points').where('id', id).first();

        if (!point) {
            return response.status(400).json({ message: 'Point de collecte pas trouvé' });
        }
        const items = await knex('items')

        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');

        return response.json({ point, items });
    }

    // Création d'un point de collecte
    async create(request: Request, response: Response) {
        const { name, email, telephone, latitude, longitude, city, region, items } = request.body;
    
        // Transaction exécutera les deux requêtes au même temps et donnera une réponse juste si les deux marchent
        const trx = await knex.transaction();

        // Propriétés de la table points
        const point = {
            image: 'image-fake',
            name,
            email, 
            telephone,
            latitude, 
            longitude,
            city,
            region
        };
    
        const insertedPointsIds = await trx('points').insert(point);
    
        const point_id = insertedPointsIds[0];
    
        // Pour associer un point avec un/plusieus item(s)
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id
            };
        })
    
        await trx('point_items').insert(pointItems);
    
    
        return response.json({ 
            id: point_id,
            ...point,
         });
    }

}


export default PointsController;