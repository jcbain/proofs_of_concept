const { build } = require("./app");

const names = ["butt", "cupcake", "satchel", "rugable"];

(async () => {
  const app = await build({ logger: true });

  app.get("/names/:delay", (req, reply) => {
    const { delay } = req.params;
    const delayNum = Number(delay);

    if (isNaN(delayNum) || delayNum > 20) {
      reply.code(400).send();
    }

    setTimeout(() => {
      reply.send(names);
    }, delayNum * 1000);
  });

  app.setErrorHandler((req, reply) => {
    reply.send();
  });

  app.listen({ port: 7777, hostname: "0.0.0.0" });
})();
