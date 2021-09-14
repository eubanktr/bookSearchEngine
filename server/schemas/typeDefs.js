const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    _id: ID
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    book: [Book]
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }`;

module.exports = typeDefs