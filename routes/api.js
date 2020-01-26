let express = require('express');
let router = express.Router();
let webSocket = require('ws');

/* POST api point. */
router.post('/api', function (req, res, next) {
    let requestType = req.query.function;
    let ws = new webSocket('ws://localhost:10000');
    ws.on('open', () => {
        ws.send(requestType);
        ws.terminate();
        res.sendStatus(200);
    });
});

module.exports = router;
