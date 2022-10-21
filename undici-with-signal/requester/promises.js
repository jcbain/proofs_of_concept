const logger = require("pino")();

function feedAphid(time, opts = {}) {
  const { signal, controller } = opts;

  return new Promise((resolve, reject) => {
    const interval = setTimeout(() => {
      if (controller && typeof controller.abort === "function") {
        controller.abort("ladybug goes hungry");
      }
      resolve("aphid was fed");
    }, time);

    if (signal && typeof signal.addEventListener === "function") {
      signal.addEventListener("abort", () => {
        clearInterval(interval);
        reject(signal.reason);
      });
    }
  });
}

function feedLadyBug(time, opts = {}) {
  const { signal, controller } = opts;

  return new Promise((resolve, reject) => {
    const interval = setTimeout(() => {
      if (controller && typeof controller.abort === "function") {
        controller.abort("aphid was eaten");
      }
      resolve("ladybug ate aphid");
    }, time);

    if (signal && typeof signal.addEventListener === "function") {
      signal.addEventListener("abort", () => {
        clearInterval(interval);
        reject(signal.reason);
      });
    }
  });
}

async function feedBugsRace(winner) {
  const aphidController = new AbortController();
  const ladyBugController = new AbortController();
  const time = {};
  if (winner === "aphid") {
    time.ladybug = 2000;
    time.aphid = 1000;
  } else if (winner === "ladybug") {
    time.ladybug = 1000;
    time.aphid = 2000;
  } else {
    time.ladybug = Math.floor(Math.random() * 1000) + 1;
    time.aphid = Math.floor(Math.random() * 1000) + 1;
  }

  try {
    const result = await Promise.race([
      feedAphid(time.aphid, {
        signal: aphidController.signal,
        controller: ladyBugController,
      }),
      feedLadyBug(time.ladybug, {
        signal: ladyBugController.signal,
        controller: aphidController,
      }),
    ]);
    return result;
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

module.exports = { feedBugsRace };
