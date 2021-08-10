export const index = async (event: any, callback: any) => {
  return {
    statusCode: 201,
    body: JSON.stringify({ msg: "test", body: event.body }),
    Headers: {
      "Content-type": "application/json",
    },
  };
};
