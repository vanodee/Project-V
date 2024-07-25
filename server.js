const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./data/projects.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

module.exports = server;