// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './data/aiizexp.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    seeds: { directory: './database/seeds' },
  },

  production: {
    client: 'pg', 
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

};
