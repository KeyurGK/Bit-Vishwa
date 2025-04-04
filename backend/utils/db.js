const { Pool } = require("pg")
const dotnev = require("dotenv");
dotnev.config();
const DB_URL = process.env.DB_URL


console.log(DB_URL,'DATA')

 const dbClient = new Pool({
     connectionString: DB_URL,
     ssl: {
        rejectUnauthorized: false, // ✅ Required for NeonDB
      },
      max: 10, // ✅ Prevents too many open connections
      idleTimeoutMillis: 30000, // ✅ Closes idle connections after 30 seconds
      connectionTimeoutMillis: 5000, // ✅ Timeout if the DB is slow to respond
 })
 dbClient.on("connect", () => {
    console.log("✅ Connected to PostgreSQL");
  });
  
  dbClient.on("error", (err) => {
    console.error("❌ Database error:", err);
  });
module.exports = dbClient;