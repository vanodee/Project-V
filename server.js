import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('projects.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
    // Add custom route here if needed
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

server.use(router);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

export default server;