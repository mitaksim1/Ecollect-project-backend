import express from 'express';

/**
 * Import de nos controllers
 */
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

/**
 * Instanciation de nos classes
 */
const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * Route vers la méthode qui liste tous les items 
 */
routes.get('/items', itemsController.index);

/**
 * Route vers la méthode de création d'un point de collecte
 */
routes.post('/points', pointsController.create );

/**
 * Route vers la méthode qui liste un point spécifique
 */
routes.get('/points/:id', pointsController.show);

/**
 * Route vers la méthode qui liste tous les points de collecte filtrés par ville, region et items
 */
routes.get('/points', pointsController.index);

export default routes;