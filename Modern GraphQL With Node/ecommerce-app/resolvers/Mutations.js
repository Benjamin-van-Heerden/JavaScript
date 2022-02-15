const { v4: uuid } = require("uuid");
const { db } = require("../db");

exports.Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const newCategory = {
            id: uuid(),
            name: input.name,
        };

        db.categories.push(newCategory);
        return newCategory;
    },

    addProduct: (parent, { input }, context) => {
        const newProduct = {
            id: uuid(),
            name: input.name,
            description: input.description,
            image: input.image,
            quantity: input.quantity,
            price: input.price,
            onSale: input.onSale,
            categoryId: input.categoryId,
        };

        db.products.push(newProduct);
        return newProduct;
    },

    addReview: (parent, { input }, { db }) => {
        const { date, title, comment, rating, productId } = input;

        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId,
        };

        db.reviews.push(newReview);
        return newReview;
    },

    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((c) => c.id != id);
        db.products = db.products.map((prod) => {
            if (prod.categoryId == id) {
                return {
                    ...prod,
                    categoryId: null,
                };
            } else {
                return prod;
            }
        });
        return true;
    },

    deleteProduct: (parent, { id }, { db }) => {
        db.products = db.products.filter((p) => (p.id = !id));
        db.reviews = db.reviews.filter((r) => {
            if (r.productId == id) return false;
            else return true;
        });
        return true;
    },

    deleteReview: (parent, { id }, { db }) => {
        db.reviews = db.reviews.filter((r) => r.id != id);
        return true;
    },

    updateCategory: (parent, { id, input }, { db }) => {
        const index = db.categories.findIndex((c) => c.id == id);
        if (index == -1) return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input,
        };
        return db.categories[index];
    },

    updateReview: (parent, { id, input }, { db }) => {
        const index = db.reviews.findIndex((r) => r.id == id);
        if (index == -1) return null;
        db.reviews[index] = {
            ...db.reviews[index],
            ...input,
        };
        return db.reviews[index];
    },

    updateProduct: (parent, { id, input }, { db }) => {
        const index = db.products.findIndex((p) => p.id == id);
        if (index == -1) return null;
        db.products[index] = {
            ...db.products[index],
            ...input,
        };
        return db.products[index];
    },
};
