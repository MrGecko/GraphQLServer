
const Promise = require('bluebird');

const seneca = require('seneca')();
const act = Promise.promisify(seneca.act, {context: seneca});

const getTitles = require('./endpoints/seneca/existdb');
const {getAllRows, getRow} = require('./endpoints/seneca/bookshelf');

const rootResolvers = {
   hello: () => 'Hello world!',

   titles: () => {
     return act("role:existdb,cmd:listTitles")
       .then(getTitles)
       .catch(function (err) {
         console.error(err);
       });
   },

   allRows: ({ limit }) => {
     const rowCount = (limit && limit >= 1 ? limit : 1);
     return act("role:bookshelf,cmd:findAllBookshelfRows", {limit:rowCount})
       .then(getAllRows)
       .catch(function (err) {
         console.error(err);
       });
   },

   row: ({ name }) => {
     return act("role:bookshelf,cmd:findOneBookshelfRow", {rowName:name})
       .then(getRow)
       .catch(function (err) {
         console.error(err);
       });
   }
 };


module.exports = {
  resolvers : rootResolvers,
  startSenecaClient : () => seneca.client()
}
