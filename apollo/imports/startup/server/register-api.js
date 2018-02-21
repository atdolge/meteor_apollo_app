import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

const testSchema = `
type Query {
    boop: String
    resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolver = {
    Query: {
        boop() {
            return "You've been booped";
        }
    },
    ...ResolutionsResolvers
};

const resolvers = merge(resolver, ResolutionsResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({schema});