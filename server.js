// const express = require('express');
// const bodyParser = require('body-parser');
//
// const app = express();
// const fs = require('fs');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const routes = require('./routes/route.js');
// routes(app,fs);
// const server = app.listen(3001, () => {
//   console.log('listening on port %s...', server.address().port);
// });

const {Server} = require("socket.io");
const io = new Server({
    cors: {
        origin: "http://localhost:8081",
        methods: ["GET", "POST"]
    }

})
io.on("connection", (socket) => {
    socket.on('message', (msg) => {
        console.log(msg);
        io.emit('message', socket.id + ':' + msg );
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
io.listen(8081);
