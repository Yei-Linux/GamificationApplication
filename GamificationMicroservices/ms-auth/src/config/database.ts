const database = {
  development: {
    username: "postgres",
    password: "123",
    database: "gamification-auth",
    host: process.env.DATABASE_HOST || "127.0.0.1",
    dialect: "postgres",
    dialectOptions: {
      connectTimeout: 60000,
    },
    port: 5432,
  },
  prod: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "gamification-auth",
    host: process.env.DATABASE_HOST || "cloud-sql-gamification-pg-prod",
    dialect: "postgres",
    dialectOptions: {
      connectTimeout: 60000,
    },
    port: 5432,
  },
};

export { database };
