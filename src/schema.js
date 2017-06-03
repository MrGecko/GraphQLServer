const { buildSchema } = require('graphql');

const GQLSchema = buildSchema(`

  type TEIHeader {
    text: String
  }

  type TEIBody {
    text: String
  }

  type TEIDocument {
    header : TEIHeader
    body : TEIBody
  }

  type Title {
    text: String
  }

  type Book {
    name: String!
    description: String
  }

  type Row {
    name: String!
    color: [Float]
    books: [Book]
  }

  type Query {
    hello: String
    titles: [Title]
    row(name: String): [Row]
    allRows(limit: Float): [Row]

    TEIdoc(uri: String) : TEIDocument
  }
`);


module.exports = GQLSchema
