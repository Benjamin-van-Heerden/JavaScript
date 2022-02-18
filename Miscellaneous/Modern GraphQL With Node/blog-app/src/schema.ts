import { gql } from "apollo-server-core";

export const typeDefs = gql`
    type Query {
        posts: [Post!]!
    }

    type Mutation {
        postCreate(post: PostInput!): PostPayload!
        postUpdate(postId: ID!, post: PostInput!): PostPayload!
        postDelete(postId: ID!): PostPayload!
        userSignup(
            email: String!
            name: String!
            password: String!
            bio: String!
        ): UserSignupPayload!
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        createdAt: String!
        published: Boolean!
        user: User
    }

    type User {
        id: ID!
        name: String!
        email: String!
        profile: Profile!
        posts: [Post!]!
    }

    type Profile {
        id: ID!
        bio: String!
        user: User!
    }

    type TestModel {
        id: ID!
        test: String!
    }

    type UserError {
        message: String!
    }

    type PostPayload {
        userErrors: [UserError!]!
        post: Post
    }

    type UserSignupPayload {
        userErrors: [UserError!]!
        token: String
    }

    input PostInput {
        title: String
        content: String
    }
`;
