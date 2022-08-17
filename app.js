// const server = require('http').createServer()
// const io = require('socket.io')(server)
// // web
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function (client) { 

//   console.log('client connect...', client.id);

//   client.on('typing', function name(data) {
//     console.log(data);
//     io.emit('typing', data)
//   })

//   client.on('message', function name(data) {
//     console.log(data);
//     io.emit('message', data)
//   })

//   client.on('location', function name(data) {
//     console.log(data);
//     io.emit('location', data);
//   })

//   client.on('connect', function () {
//   })

//   client.on('disconnect', function () {
//     console.log('client disconnect...', client.id)
//     // handleDisconnect()
//   })

//   client.on('error', function (err) {
//     console.log('received error from client:', client.id)
//     console.log(err)
//   })
// })

// var server_port = process.env.PORT || 3000;
// server.listen(server_port, function (err) {
//   if (err) throw err
//   console.log('Listening on port %d', server_port);
// });


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// app.get('/', (req, res) => {
//   res.send({
//     "name": "hi"
//   });
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (msg) => {
    console.log('message: ', msg);
    io.emit('message', msg);
  });
});

// server.listen(80, () => {
//   console.log('listening on *:80');
// });

// https://socket.io/get-started/chat
// https://taycodes.dev/building-a-realtime-chat-app-with-flutter-nodejs-and-socketio