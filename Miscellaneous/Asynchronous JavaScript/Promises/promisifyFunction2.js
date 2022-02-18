const { Pool } = require("pg");

const pool = new Pool({
    user: "node_user",
    host: "localhost",
    database: "usersdb",
    password: "node_password",
    port: 5432
});

// pool.query("SELECT * FROM users", (err, result) => {
//     console.log(result.rows);
// })

// with callbacks
const getUsersCallback = (callback) => {
    pool.query("SELEC * FROM users", (err, result) => {
        if (err) callback(""+err);
        else callback(result.rows);
    });
}

getUsersCallback((val) => console.log(val));


// using promises
const getUsers = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELEC * FROM users", (err, result) => {
            if (err) return reject(err);
            return resolve(result.rows);
        });
    });
}

getUsers().then(
    (result) => console.log(result)
).catch(
    (err) => console.log(err+"")
);