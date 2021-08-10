import { dynamoDbClient } from "../utils/dynamoDbClient";

export const list = async (event: any, callback: any) => {
  const params = {
    TableName: "users-dev",
  };

  // fetch all todos from the database
  const response = await dynamoDbClient.scan(params).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(response),
    Headers: {
      "Content-type": "application/json",
    },
  };
};
