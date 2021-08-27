const { Router } = require("express");
const pool = require("../db");

const router = Router();

router.get(
    "/",
    (request, response, next) => {
        pool.query(
            "SELECT * FROM habitats ORDER BY id ASC;",
            (error, result) => {
                if (error) return next(error);
                response.json(result.rows);
            }
        );
    }
);

router.get(
    "/:id",
    (request, response, next) => {
        const { id } = request.params;

        pool.query(
            `SELECT * FROM habitats WHERE id = ${id};`,
            (error, result) => {
                if (error) return next(error);
                response.json(result.rows);
            }
        );
    }
);

router.post(
    "/",
    (request, response, next) => {
        const { name, climate, temperature } = request.body;
        pool.query(
            `INSERT INTO habitats (name, climate, temperature) VALUES ('${name}', '${climate}', ${temperature});`,
            (error, result) => {
                if (error) return next(error);
                response.send("Successfully Posted:\n" + JSON.stringify({name: name, climate: climate, temperature: temperature}, null, 2));
            }
        );
    }
);

router.put(
    "/:id",
    (request, response, next) => {
        const { id } = request.params;
        const keys = ["name", "climate", "temperature"];
        const fields = [];

        keys.forEach(key => {
            if (request.body[key]) fields.push(key);
        });

        fields.forEach(field => {
            pool.query(
                `UPDATE habitats SET ${field}='${request.body[field]}' WHERE id=${id}`,
                (error, result) => {
                    if (error) return next(error);
                }
            );
        });
        response.send(`Successfully Updated Field with id ${id}`);
    }
);

router.delete(
    "/:id",
    (request, response, next) => {
        const { id } = request.params;
        pool.query(
            `DELETE FROM habitats WHERE id=${id}`,
            (error, result) => {
                if (error) return next(error);
                response.send(`Successfully deleted habitat with id = ${id}`);
            }
        );
    }
);

module.exports = router;