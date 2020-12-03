import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import axios from 'axios';
import bodyparser from 'body-parser';
import routes from './server/routes/controller'
import sockets from './server/routes/sockets'

const app = express();
const server = http.Server(app);
const io = SocketIO(server);
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set('views', './public/views');

app.use(express.static(__dirname));
app.use(express.static('public'));

axios.defaults.withCredentials = true;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: '50mb' }));

routes(app);
sockets(io);

server.listen(port, () => {
    console.log(`listening to port: ${port}`);
});

