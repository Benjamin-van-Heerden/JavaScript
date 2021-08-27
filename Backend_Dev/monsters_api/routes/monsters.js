const { Router } = require("express");
const pool = require("../db");

const router = Router();

router.get(
    "/",
    (request, response, next) => {
        pool.query(
            "SELECT * FROM monsters ORDER BY id ASC;",
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
            `SELECT * FROM monsters WHERE id = ${id};`,
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
        const { name, personality } = request.body;
        pool.query(
            `INSERT INTO monsters (name, personality) VALUES ('${name}', '${personality}');`,
            (error, result) => {
                if (error) return next(error);
                response.send("Successfully Posted:\n" + JSON.stringify({name: name, personality: personality}, null, 2));
            }
        );
    }
);

router.put(
    "/:id",
    (request, response, next) => {
        const { id } = request.params;
        const keys = ["name", "personality"];
        const fields = [];

        keys.forEach(key => {
            if (request.body[key]) fields.push(key);
        });

        fields.forEach(field => {
            pool.query(
                `UPDATE monsters SET ${field}='${request.body[field]}' WHERE id=${id}`,
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
            `DELETE FROM monsters WHERE id=${id}`,
            (error, result) => {
                if (error) return next(error);
                response.send(`Successfully deleted monster with id = ${id}`);
            }
        );
    }
);

module.exports = router;