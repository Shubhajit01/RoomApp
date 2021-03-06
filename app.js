require('dotenv').config();
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const path = require('path');
const { USER_CHAT, RECENT_CHATS } = require('./backend/data/data');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('**', (req, res) => res.send('Hello World'));
const expressServer = app.listen(PORT, () =>
  console.log(`Server Listening on ${PORT}`)
);

const io = socketio(expressServer);

io.on('connection', (socket) => {
  socket.emit('message', 'Connection Established Successfully');
  socket.on('chatRoom', (data) => {
    switch (data.type) {
      case 'LOAD_HISTORY':
        socket.emit('userCharHistoryData', USER_CHAT);
        break;
      case 'USER_LIST':
        socket.emit('usersList', RECENT_CHATS);
        break;
      default:
        console.log('Some other action...');
    }
  });
});
