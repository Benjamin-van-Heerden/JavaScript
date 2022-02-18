"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = require("./resolvers");
const schema_1 = require("./schema");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: {
        Query: resolvers_1.Query,
        Mutation: resolvers_1.Mutation
    },
    context: {
        prisma
    }
});
server.listen().then(({ url }) => console.log(`Server ready at: ${url}`));
