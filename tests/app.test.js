const request = require("supertest");
const app = require("../app");

xtest("get 200 for the main route (GET /)", async () => {
  await request(app)
    .get("/")
    .expect(200);
});

xtest("res for the main route (GET /) should be an object", async () => {
  const res = await request(app).get("/");
  expect(typeof res).toBe("object");
});

xtest("verify the punchline for the main route (GET /)", async () => {
  const res = await request(app).get("/");
  const textJson = JSON.parse(res.text);
  expect(textJson.msg).toEqual("This is the Publications API");
});

xtest("get 200 for the articles route (GET /articles)", async () => {
  await request(app)
    .get("/articles")
    .expect(200);
});

xtest("get 404 for non existing routes", async () => {
  await request(app)
    .get("/non-existing-endpoint")
    .expect(404);
});

xtest("verify a fetched article's doi data type", async () => {
  const res = await request(app).get("/articles");
  expect(typeof res.body[0].doi).toBe("string");
});

xtest("verify a fetched article's issn data type", async () => {
  const res = await request(app).get("/articles");
  expect(typeof res.body[0].issn).toBe("object");
});

xtest("verify a fetched article's title data type", async () => {
  const res = await request(app).get("/articles");
  expect(typeof res.body[0].title).toBe("string");
});
