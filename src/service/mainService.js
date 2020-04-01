// const queryData = require('../model/queryData');
// const sQuery = new queryData;

const mainDatabase = require('../model/postgresqlModels')
const elasticDatabase = require('../model/elasticsearchModels')

class mainService {
	pingPong(numberInput) {
		return numberInput * 20;
	}

	async queryData() {
		// PG DATABASE
		// const response = await mainDatabase.selectData();
		// const response = await mainDatabase.insertData({ "id": 3, "name": "Hello Worlds." });
		// const response = await mainDatabase.updateData({ "whereId": 1, "updateName": "Hello Benz" });
		// const response = await mainDatabase.deleteData({ whereIds: [1, 3] });


		// ELASTICSEARCH 
		const response = await elasticDatabase.searchIndex({ findCharacter: "Ned Stark" });
		console.log(response);
		return response;
	}
}

module.exports = mainService;