const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./src/schema');
const {startSenecaClient, resolvers} = require('./src/resolvers');


function startGraphQLServer(schema, rootResolvers, context) {
  const app = express();
  startSenecaClient();
  app.use('/graphql', cors(), graphqlHTTP({
        schema: schema,
        rootValue: rootResolvers,
        context: context,
        graphiql: true,
        pretty: true,
  })).listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
}

startGraphQLServer(schema, resolvers, {});
