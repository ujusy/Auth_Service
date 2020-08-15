module.exports = {
  local: {
    database: 'auth',
    dialect: 'sqlite',
    storage: 'db.sqlite',
  },
  ci: {
    database: 'auth',
    dialect: 'sqlite',
    storage: 'db.sqlite3',
    logging: false,
  },
  dev: {
    database: 'auth',
    define: {
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
      },
    },
    dialect: 'mysql',
    host: process.env.ENV.DB_ENDPOINT,
    password: process.env.DB_PASSWORD,
    username: process.env.env.username,
  },
  test: {
    database: 'auth',
    define: {
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
      },
    },
    dialect: 'mysql',
    host: process.env.DB_ENDPOINT,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
  stage: {
    database: 'auth',
    define: {
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
      },
    },
    dialect: 'mysql',
    host: process.env.DB_ENDPOINT,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
  production: {
    database: 'auth',
    define: {
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
      },
    },
    dialect: 'mysql',
    host: process.env.DB_ENDPOINT,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
};
