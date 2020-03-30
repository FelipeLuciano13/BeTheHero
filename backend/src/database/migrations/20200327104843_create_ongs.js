
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){ //'ongs' é o parâmetro que recebe o nome da tabela 
    table.string('id').primary(); // primary() significa parte principal da tabela
    table.string('name').notNullable(); //notNullable() não aceita o valor nulo
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); //segundo parâmetro representa o número de letras
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs'); //dropTable() deleta a tabela
};
