'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: 'sa-east-1'})

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({region: 'sa-east-1'});

  const params = {
    TableName: "Users",
    Item: {
      id: "12346",
      firstname: 'Thales',
      lastname: 'Avila'
    }
  }
  try {
    const data = await documentClient.put(params).promise()
    console.log(data);

  } catch (err) {
      console.log(err);
  }
}
