const fastify = require("fastify");

async function build(opts) {
  const app = await fastify(opts);

  return app;
}

module.exports = { build };
