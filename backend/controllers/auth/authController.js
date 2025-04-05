const  dbClient  = require("../../utils/db");

// const signUp = async (req, res) => {
//   const { firstName, lastName, emailId, password } = req.body;
//   try {
//     await dbClient.connect();
//     const signUpQuery = `
//         CREATE TABLE  IF NOT EXISTS USERS(
//         id SERIAL PRIMARY KEY,
//         firstName VARCHAR(10) NOT NULL,
//         lastName VARCHAR(10) NOT NULL,
//         emailId VARCHAR(20) UNIQUE,
//         password VARCHAR(10) NOT NULL,
//         createdAt TIMESTAMP WITH TIME STAMP DEFAULT CURRENT_TIMESTAMP)`;
//     await dbClient.query(signUpQuery);
//     const insertQuery = `
//         INSERT INTO USERS(firstName,lastName,emailId,password)
//         VALUES ($1,$2,$3,$4)`;
//     const values = [firstName, lastName, emailId, password];
//     const insertResult = await dbClient.query(insertQuery, values);
//     res.status(200).json({
//       success: true,
//       message: "Sign Up succesful",
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error,
//     });
//   } finally {
//     await dbClient.end();
//   }
// };

const signUp = async (req, res) => {
    const { firstName, lastName, emailId, password } = req.body;

    try {
        await dbClient.connect();

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                firstName VARCHAR(50) NOT NULL,
                lastName VARCHAR(50) NOT NULL,
                emailId VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
        await dbClient.query(createTableQuery);

        const insertQuery = `
            INSERT INTO users (firstName, lastName, emailId, password)
            VALUES ($1, $2, $3, $4) RETURNING *`;
        
        const values = [firstName, lastName, emailId, password];
        const result = await dbClient.query(insertQuery, values);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: result.rows[0],
        });
    } catch (error) {
        console.error("Database error:", error);
        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "Email ID already exists",
            });
        }
        res.status(500).json({
            success: false,
            message: "Error registering user",
        });
    } 
};

const login = async (req, res) => {
    const { emailId, password } = req.body;
    try {
        const loginQuery = `
        SELECT * FROM users
        WHERE emailId=($1)`
        const values = [emailId];
        const loginResult = await dbClient.query(loginQuery, values);
        if (loginResult.rows[0].password !== password) {
            console.log(loginResult.rows[0].password)
            return res.status(401).json({
                success: false,
                message:"Incorrect Password"
            })
        }
        return res.status(200).json({
            success: true,
            message:"Login Succesful"
        })
       
    } catch (error) {
        return res.status(400).json({
            success: false,
            message:"Error"
        })
    }
}
module.exports = { signUp,login };
