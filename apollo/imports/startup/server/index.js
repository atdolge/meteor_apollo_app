import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query {
    boop: String
}
`;

const resolvers = {
    Query: {
        boop() {
            return "You've been booped";
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({schema});