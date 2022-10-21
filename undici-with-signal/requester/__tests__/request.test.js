const { setGlobalDispatcher } = require("undici");

const { agent } = require("./_mockAgent");
const { run } = require("../request");

setGlobalDispatcher(agent);

describe("run tests", () => {
  test("run test 1", async () => {
    try {
      await run(true);
    } catch (err) {
      const actual = err.message;
      const expected = "Request aborted";
      expect(actual).toBe(expected);
    }
  });
});
