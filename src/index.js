import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { RootQueryType, RootMutaionType } from './gql';

// setup server
const app = express();
const PORT = 5000;

// mongoose connection  // run  mongod --config /usr/local/etc/mongod.conf  in terminal before start
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/booksdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



// setup graphql schema
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutaionType
});

// setup routes
app.use('/', graphqlHTTP({
  schema,
  graphiql: true // to enable gui
}));



// start
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
