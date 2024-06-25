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

// const express = require('express');
// const ServerSocket  = require('ws').Server
// const PORT  = 8081;
// const server = express()
//     .listen(PORT, () => console.log(`Server is running on port ${PORT}`))
//
// const wss =  new ServerSocket ({ server })
//
// wss.on('connection', (ws ,req) => {
//   console.log('[Client connected]')
//   ws.id = req.headers['sec-websocket-key'].substring(0, 8)
//   console.log( req.headers)
//   ws.send(`${ws.id}`)
//   ws.on('message', message => {
//     let clients = wss.clients
//     clients.forEach(client => {
//       client.send( ` ${ws.id} : ${message}`)
//
//     })
//   })
//   // Connection closed
//   ws.on('close', () => {
//     console.log('Close connected')
//   })
// })



const {Server} = require("socket.io");
const io = new Server({
    cors: {
        origin: "http://localhost:8081",
        methods: ["GET", "POST"]
    }

})
io.on("connection", (socket) => {
    console.log('a user connected');

    socket.on('message', (msg) => {
        console.log(msg);
        io.emit('message', socket.id + ':'+ msg );
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
io.listen(8081);
