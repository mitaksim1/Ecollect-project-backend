import express from 'express';
// Pour pouvoir se connecter à notre bdd, on doit importer le fichier connection
import knex from './database/connection';

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

export default routes;