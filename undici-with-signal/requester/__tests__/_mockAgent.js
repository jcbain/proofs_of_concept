const { MockAgent } = require("undici");

const mockData = ["bob", "flob", "lindsay"];

const agent = new MockAgent();
agent.disableNetConnect();

const client = agent.get("http://localhost:7777");

client
  .intercept({
    path: "/names/2",
    method: "GET",
  })
  .reply(200, {
    body: mockData,
    status: "success",
  });

client
  .intercept({
    path: "/names/3",
    method: "GET",
  })
  .reply(400, { body: mockData })
  .delay(4000);

module.exports = { agent };
