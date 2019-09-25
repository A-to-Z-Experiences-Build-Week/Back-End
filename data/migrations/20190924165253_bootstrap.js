
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments()
        tbl.string('username', 32)
            .unique()
            .notNullable()
        tbl.string('password', 64)
            .notNullable()
    })
    .createTable('expriences', tbl => {
      tbl.increments()
      tbl.integer('origin_user')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users') 
      tbl.integer('rateing')
        .notNullable()
        .unsigned()
      tbl.string('name', 128)
        .notNullable()
        .unique()
      tbl.string('location', 128)
        .notNullable()
      tbl.string('priceing', 32)
        .notNullable()
      tbl.string('description', 512)
        .notNullable()
      tbl.string('img_url', 512)
        .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('expriences')
  return knex.schema.dropTableIfExists('users')
};
