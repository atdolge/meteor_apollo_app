import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from "graphql-tools";
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
type Query {
    boop: String
}
`;

const typeDefs = [
    testSchema,
    ResolutionsSchema
];

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