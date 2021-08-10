import { Request } from "aws-sdk";
import * as uuid from "uuid";
import { dynamoDbClient } from "../utils/dynamoDbClient";

interface IUserDTO {
  name: string;
  age: string;
  role: string;
}

export const create = async (event: any, callback: any) => {
  const { name, age, role } = JSON.parse(event.body) as IUserDTO;

  const id = uuid.v4();

  await dynamoDbClient
    .put({
      TableName: "users-dev",
      Item: {
        id,
        name,
        age,
        role,
      },
    })
    .promise();

  return {
    statusCode: 200,
    body: `Put item ${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
