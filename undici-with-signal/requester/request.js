const { request } = require("undici");
const logger = require("pino")();

async function run(abort) {
  logger.info("I AM RUNNING");
  const time = abort ? { timeout: 2, req: 3 } : { timeout: 3, req: 2 };
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
