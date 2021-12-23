'use strict'


// const db = mongoClient.db('StarWarsDatabase')

module.exports.up = async function (next) {
  const mongoClient = await require('../db.js');

  const db = await mongoClient.db('StarWarsDatabase')
  await db.createCollection('starships');

  next()
}

module.exports.down = function (next) {
  next()
}
