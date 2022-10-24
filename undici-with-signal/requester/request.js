const { request } = require("undici");
const logger = require("pino")();

async function run(abort) {
  const time = { timeout: 3, req: 2 };

  if (abort) {
    time.timeout -= 1;
    time.req += 1;
  }

  try {
    const { body } = await request(`http://localhost:7777/names/${time.req}`, {
      signal: AbortSignal.timeout(time.timeout * 1000),
    });
    const data = await body.json();
    return data;
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

module.exports = { run };
