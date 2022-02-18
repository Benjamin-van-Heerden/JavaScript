const { Router } = require("express");
const pool = require("../db");

const router = Router();

router.get(
    "/",
    (request, response, next) => {
        pool.query(
            "SELECT * FROM lives",
            (error, result) => {
                if (error) return next(error);
                response.json(result.rows);
            }
        );
    }
);

router.get(
    "/conditions",
    (request, response, next) => {
        pool.query(
            "SELECT * FROM lives JOIN habitats ON habitats.name=lives.habitat",
            (error, result) => {
                if (error) return next(error);
                response.json(result.rows);
            }
        )
    }
)

module.exports = router;