
const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth/routes")
dotenv.config();
const app = express();
app.use(cors())
const PORT = process.env.PORT;
app.use(express.json());
app.use("/bit-vishwa/v1",authRoutes)

app.listen(PORT,() => {
   console.log(`Seeeeeeeerver runniing on ${PORT}`)
})