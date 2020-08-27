import { 
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql';
import BookType from './book';
import AuthorType from './author';
import Book from '../models/book';
import Author from '../models/author';
  
export const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    books: {
      type: new GraphQLList(BookType),
      description: 'List of books',
      resolve: () => Book.find({})
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of authors',
      resolve: () => Author.find({})
    }
  })
});

export const RootMutaionType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Add a book',
      args: {
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
        }
      },
      resolve: (book, args) => {
        const newBook = new Book(args);
        newBook.save();
        return args;
      }
    },
    addAuthor: {
      type: AuthorType,
      description: 'Add a author',
      args: {
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
        }
      },
      resolve: (author, args) => {
        const newAuthor = new Author(args);
        newAuthor.save();
        return args;
      }
    }
  })
});
