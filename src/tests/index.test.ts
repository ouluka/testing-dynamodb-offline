import request from "supertest";
import { app } from "../app";

describe("Index", () => {
  it("Should return Hello World!", async () => {
    const response = await request(app).get("/");

    expect(response.text).toEqual("Hello World!");
  });
});
