// set WebSocket on global object
global.WebSocket = require('ws');
const {RealTimeAPI} = require('rocket.chat.realtime.api.rxjs');
const realTimeAPI = new RealTimeAPI("ws://localhost:8080");

realTimeAPI.keepAlive();

const auth = realTimeAPI.login('', '');

//Subscribe to messages and errors
    auth.subscribe(
    (data) => console.log(data),
    (err) => console.log(err),
    () => console.log('completed'));


//Subscribe to a specific channel, identified by roomId
realTimeAPI.sendMessage({
  msg: 'sub',
  id: '<a unique Id for subscription>',
  name: 'stream-room-messages',
  params: ['GENERAL', false],
});