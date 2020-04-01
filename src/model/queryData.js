const config = require('../config/database');
const knex = require('knex')(config.mainDatabase);

class queryData {

  async query() {
    const sqlString = knex.select('*').from('table_name').toString();
    try {
      const result = knex.raw(sqlString).then(result => {
        return result;
      });

      return result;
    } catch (err) {
      return err;
    }
  }

}

module.exports = queryData;