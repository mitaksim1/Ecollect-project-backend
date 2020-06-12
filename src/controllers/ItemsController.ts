import { Request, Response } from 'express';
import knex from '../database/connection';

/**
 * Liste les items 
 */
class ItemsController {
    async index(request: Request, response: Response) {
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
    }
}

export default ItemsController;