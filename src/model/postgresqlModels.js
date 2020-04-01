const config = require('../config/database');
const _ = require('lodash');
const knex = require('knex')(config.pgMainDatabase);


exports.selectData = (offset, limit, whereName) => {
  if (!offset) {
    offset = 0;
  }
  if (!limit) {
    limit = 10;
  }

  let Query = knex('name_table');

  // If where column name
  if (whereName) {
    Query.where({ name: whereName })
  }

  // Limit Offset Limit [Pagegination]
  Query.offset(offset).limit(limit);

  try {
    const result = Query.then(result => {
      return result;
    });

    return result;
  } catch (err) {
    return err;
  }
}

exports.insertData = async ({ id, name }) => {
  const Query = knex('name_table').insert({
    "id": id,
    "name": name
  });

  try {
    const result = Query.then(result => {
      return result;
    });

    return result;
  } catch (err) {
    return err;
  }
};

exports.updateData = async ({ whereId, updateName }) => {
  const Query = knex('name_table')
    .update({
      "name": updateName
    })
    .where({
      "id": whereId
    });

  try {
    const result = Query.then(result => {
      return result;
    });

    return result;
  } catch (err) {
    return err;
  }
};

exports.deleteData = async ({ whereIds }) => {
  for (let i = 0; i <= whereIds.length - 1; i++) {
    let Query = knex('name_table')
      .where({
        'id': whereIds[i]
      })
      .del();
    try {
      const result = Query.then(result => {
        return result;
      });
    } catch (err) {
      return err;
    }
  }

  return true;
};

// https://devhints.io/knex