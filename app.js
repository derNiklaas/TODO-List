let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let webSocket = require('ws');
let indexRouter = require('./routes/index');
let apiRouter = require('./routes/send');
let interfaceRouter = require('./routes/interface');
let fs = require('fs');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', apiRouter);
app.use('/', interfaceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const webSocketServer = new webSocket.Server({port: 10000});
webSocketServer.on('connection', (webSocket) => {
    webSocket.on('message', (message) => {
        webSocketServer.clients.forEach(ws => {
            if (ws.readyState === webSocket.OPEN) {
                ws.send(message);
            }
        });
        if (message.startsWith("settaskOne-")) {
            let data = message.substring(11, message.length)
            let todo = fs.readFileSync('./todo.json');
            let json = JSON.parse(todo);
            json.task1 = data
            fs.writeFileSync('./todo.json', JSON.stringify(json, null, 2))
        } else if (message.startsWith("settaskTwo-")) {
            let data = message.substring(11, message.length)
            let todo = fs.readFileSync('./todo.json');
            let json = JSON.parse(todo);
            json.task2 = data
            fs.writeFileSync('./todo.json', JSON.stringify(json, null, 2))
        } else if (message.startsWith("settaskThree-")) {
            let data = message.substring(13, message.length)
            let todo = fs.readFileSync('./todo.json');
            let json = JSON.parse(todo);
            json.task3 = data
            fs.writeFileSync('./todo.json', JSON.stringify(json, null, 2))
        } else if (message.startsWith("settaskFour-")) {
            let data = message.substring(12, message.length)
            let todo = fs.readFileSync('./todo.json');
            let json = JSON.parse(todo);
            json.task4 = data
            fs.writeFileSync('./todo.json', JSON.stringify(json, null, 2))
        } else if (message === "stop") {
            webSocketServer.close();
            process.exit(0);
        }
    });
});

module.exports = app;
