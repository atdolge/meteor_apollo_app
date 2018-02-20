import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const App = ({data}) => <h1>{data.boop}</h1>;

const hiQuery = gql`
{
    boop
}  
`;

export default graphql(hiQuery)(App);