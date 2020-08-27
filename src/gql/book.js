import { 
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import AuthorType from './author';
import Author from '../models/author';

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Book schema properties',
  fields: () => ({
    id: { 
      type: GraphQLNonNull(GraphQLInt)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    year: { 
      type: GraphQLNonNull(GraphQLInt)
    },
    authorId: { 
      type: GraphQLNonNull(GraphQLInt)
    },
    author: { 
      type: GraphQLNonNull(AuthorType),
      resolve: (book) => {
        return Author.findOne({ id: book.authorId }).exec();
      }
    }
  })
});

export default BookType;
