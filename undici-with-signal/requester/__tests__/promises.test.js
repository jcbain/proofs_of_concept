const { feedBugsRace } = require("../promises");

describe("feedBugs tests", () => {
  test("should throw an error that the ladybug goes hungry", async () => {
    try {
      await feedBugsRace("aphid");
    } catch (err) {
      const actual = err;
      const expected = "ladybug goes hungry";
      expect(actual).toBe(expected);
    }
  });

  test("should throw an error that the ladybug eats the aphid", async () => {
    try {
      await feedBugsRace("ladybug");
    } catch (err) {
      const actual = err;
      const expected = "aphid was eaten";
      expect(actual).toBe(expected);
    }
  });
});
