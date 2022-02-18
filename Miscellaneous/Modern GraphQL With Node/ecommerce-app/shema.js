const { gql } = require("apollo-server");

exports.typeDefs = gql`
    type Query {
        hello: String! # bang makes non-nullable
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        arrStrings: [String!]!
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
        reviews: [Review!]!
    }

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        addProduct(input: AddProductInput!) : Product!
        addReview(input: AddReviewInput!): Review!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        deleteReview(id: ID!): Boolean!
        updateCategory(id: ID!, input: UpdateCategoryInput!): Category
        updateProduct(id: ID!, input: UpdateProductInput!): Product
        updateReview(id: ID!, input: UpdateReviewInput!): Review  
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean
        ratingGEQ: Int
    }

    input AddCategoryInput {
        name: String!
    }

    input UpdateCategoryInput {
        name: String!
    }

    input UpdateProductInput {
        name: String
        description: String
        image: String
        quantity: Int
        price: Float
        onSale: Boolean
        categoryId: String
    }

    input UpdateReviewInput {
        title: String
        comment: String
        rating: Int
    }

    input AddProductInput {
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryId: String!
    }

    input AddReviewInput {
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }
`;
