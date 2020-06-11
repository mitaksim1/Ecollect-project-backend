import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lampes', image: 'lampes.svg'},
        { title: 'Piles et batteries', image: 'batteries.svg'},
        { title: 'papiers et cartons', image: 'papiers-cartons.svg'},
        { title: 'Déchets électroniques', image: 'electroniques.svg'},
        { title: 'Déchets organiques', image: 'organiques.svg'},
        { title: 'Huiles', image: 'huiles.svg'},
    ]);
}