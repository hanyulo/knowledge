

## Disadvantages of RESTful API
* [refs](https://ithelp.ithome.com.tw/articles/10188294)
* I need examples

## BuildSchema

* Query
  * is the root type which is mandatory

* Five Basic Types of Schema
  * String
  * Int
  * Float
  * Boolean
  * ID

* graphql schema type do not has to associate with the schema in database

```js
  exports.schema = buildSchema(`
    type User {
      id: ID!
      name: String!
    }

    type Post {
      id: ID!
      title: String!
      body: String!
    }

    type Query {
      users: [User!]!
      posts: [Post!]!
    }
  `);

```

## Clients
 * [lokka](https://github.com/kadirahq/lokka)
 * [apollo](https://github.com/apollographql/apollo-client)
 * [Relay](https://facebook.github.io/relay/)

## To Read
* [Fun Fun Function](https://www.youtube.com/watch?v=lAJWHHUz8_8&index=1&list=PL0zVEGEvSaeEjIDdbK1KfR7V9XBCVAr0P)
  * GraphQL
  * dataloader
