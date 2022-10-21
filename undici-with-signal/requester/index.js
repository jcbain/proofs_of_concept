const { request } = require("undici");
const logger = require("pino")();

async function run(abort) {
  const time = abort ? { timeout: 2, req: 3 } : { timeout: 3, req: 2 };
  try {
    const { body } = await request(`http://localhost:7777/names/${time.req}`, {
      signal: AbortSignal.timeout(time.timeout * 1000),
    });
    const data = await body.json();
    logger.info(data);
  } catch (err) {
    logger.error(err);
  }
}

(() => {
  const args = process.argv.slice(2);
  const abort = args.includes("--abort");
  run(abort);
})();
