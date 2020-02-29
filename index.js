const express = require("express");
const app = express();
// const router = express.Router();

app.use(express.static(`${__dirname}/static`));

const server = app.listen(32405, () => {
    const port = server.address().port;
    console.log("Server stated at http://localhost:%s", port);
});