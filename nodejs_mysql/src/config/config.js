module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 8888,
  SWAGGERPORT: process.env.PORT || "localhost:8888",

  /** DATABASE CONFIG */
  db: {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Root@3",
    DB: "hrmdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },

  /** AUTH KEY */
  auth: {
    secret: "our-secret-key",
  },
};
