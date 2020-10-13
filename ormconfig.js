module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mesha',
  database: 'postgres',
  migrations: ['dist/migration/*.js'],
  entities: [`dist/**/**.entity.js`],
  cli: {
    migrationsDir: 'src/migration',
    entitiesDir: 'src/**',
  },
  synchronize: false,
};
