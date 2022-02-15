const { ApolloServer } = require("apollo-server");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./shema");
const { db } = require("./db");
const { Mutation } = require("./resolvers/Mutations");



const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product,
    },
    context: {
        db
    }
});

server.listen().then(({ url }) => {
    console.log("Server running at " + url);
});
