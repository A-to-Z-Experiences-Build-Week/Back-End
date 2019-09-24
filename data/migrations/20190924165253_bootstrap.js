
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments()
        tbl.text('username', 32)
            .unique()
            .notNullable()
        tbl.text('password', 64)
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
