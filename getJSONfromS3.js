const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  const Bucket = "devops-arcada-api";
  const Key = "data.json";
  const data = await s3.getObject({ Bucket, Key }).promise();
  const jsondata = data.Body.toString('ascii');

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },

        body: jsondata

    };
    return response;
};