
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){ 
    table.increments(); // cria uma chave primária que incrementa automáticamente

    table.string('title').notNullable(); 
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs'); //chave estrangeira, parte relacional
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
