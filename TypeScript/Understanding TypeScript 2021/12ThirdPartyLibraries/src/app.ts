import _ from "lodash";
import { Product } from "./product"; 
import { validate } from "class-validator"
import "reflect-metadata";
import { plainToClass } from "class-transformer";

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

const p1 = new Product("A Book", 12.99);

console.log(p1.getInfo());

const products = [
    {title: "A Carpet", price: 13.99}, 
    {title: "A Table", price: 14.99}, 
    {title: "A Chair", price: 15.99}, 
    {title: "A Plant", price: 3.99}
];

// const loadedProducts = products.map(prod => new Product(prod.title, prod.price))
// loadedProducts.forEach(prod => console.log(prod.getInfo()));

const loadedProducts = plainToClass(Product, products)
loadedProducts.forEach(prod => console.log(prod.getInfo()));

const newProd = new Product("", -5.99);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log("VALIDATION ERRORS");
        console.log(errors);
    }
    else {
        console.log(newProd.getInfo());
    }
});