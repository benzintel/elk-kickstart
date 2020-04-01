const config = require('../config/database');
const _ = require('lodash');
const { Client } = require('@elastic/elasticsearch'); // ES7

const client = new Client(config.elasticsearchDatabase);

exports.searchIndex = async ({ findCharacter }) => {
  const { body } = await client.search({
    index: 'game-of-thrones',
    body: {
      query: {
        match: {
          character: {
            query: findCharacter
          }
        }
      }
    }
  })
  return body.hits.hits;
};


// PUT /game-of-thrones


// POST /game-of-thrones/_doc/
// {
//   "character": "Ned Stark",
//   "quote": "Winter is coming."
// }

// GET /game-of-thrones/_doc/0

// GET /game-of-thrones/_search
// {
//     "query": {
//       "match": {
//         "character": {
//           "query": "Ned Stark"
//         }
//       }
//     }
// }

// Search LIKE
// GET /game-of-thrones/_search
// {
//     "query": {
//       "match_phrase": {
//         "character": {
//           "query": "Stark"
//         }
//       }
//     }
// }


// GET /game-of-thrones/_search?q=character:Ned Stark
