exports.Query = {
    hello: () => "world",

    numberOfAnimals: () => 666,

    price: () => 3.14,

    isCool: () => true,

    arrStrings: () => ["hello", "world"],

    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products;
        if (filter) {
            const { onSale, ratingGEQ } = filter;
            if (onSale == true || onSale == false) {
                filteredProducts = filteredProducts.filter((prod) => prod.onSale == onSale);
            }
            if ([1, 2, 3, 4, 5].includes(ratingGEQ)) {
                filteredProducts = filteredProducts.filter((prod) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    db.reviews.forEach((r) => {
                        if (r.productId == prod.id) {
                            sumRating += r.rating;
                            numberOfReviews++;
                        }
                    });
                    return numberOfReviews >= 0 && sumRating / numberOfReviews >= ratingGEQ;
                });
            }
        }
        return filteredProducts;
    },

    product: (parent, args, { db }) => {
        const { id } = args;
        return db.products.find((product) => product.id == id);
    },

    reviews: (parent, args, { db }) => db.reviews,

    categories: (parent, args, { db }) => db.categories,

    category: (parent, args, { db }) => {
        const { id } = args;
        return db.categories.find((cat) => cat.id == id);
    },
};
