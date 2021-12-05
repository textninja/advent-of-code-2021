const app = require('express')();
const { createClient } = require('redis');


(async() => {

  const client = createClient({
    url: "redis://redis"
  });

  await client.connect();

  app.get("/", async (req, res) => {
    await client.incr("views");
    res.send((await client.get("views")).toString());
  });

  app.listen(5000, () => {
    console.log("Listening on port 5000");
  });


})();