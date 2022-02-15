exports.Category = {
    products: ({ id: categoryId }, { filter }, { db }) =>
        db.products.filter((prod) =>
            filter ? prod.categoryId == categoryId && prod.onSale : prod.categoryId == categoryId
        ),
};
