const { setGlobalDispatcher } = require("undici");

const { agent } = require("./_mockAgent");
const { run } = require("../request");

setGlobalDispatcher(agent);

describe("run tests", () => {
  test("should throw a timeout error if abort parameter is set to true", async () => {
    try {
      await run(true);
    } catch (err) {
      const actual = err.message;
      const expected = "Request aborted";
      expect(actual).toBe(expected);
    }
  });

  test("should resolve with data if abort parameter isn't set", async () => {
    const data = await run();
    expect(data.code).toBe(200);
  });
});
