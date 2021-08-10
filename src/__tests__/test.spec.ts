import request from "supertest";

test("create returns 200 OK", async () => {
  await request(process.env.API_URL)
    .post('/users')
    .then((response) => {
      expect(response.status).toBe(200);
    });
});
