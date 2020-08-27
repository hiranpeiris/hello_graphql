import { 
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import BookType from './book';
import Book from '../models/book';
  
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'Author schema properties',
  fields: () => ({
    id: { 
      type: GraphQLNonNull(GraphQLInt)
    },
    name: { 
      type: GraphQLNonNull(GraphQLString)
    },
    nationality: {
      type: GraphQLNonNull(GraphQLString)
    },
    publications: { 
      type: GraphQLNonNull(GraphQLInt)
    },
    books: {
      type: GraphQLNonNull(GraphQLList(BookType)),
      description: 'List of books',
      resolve: (author) => {
        return Book.find({ authorId: author.id });
      }
    }
  })
});
  
export default AuthorType;
