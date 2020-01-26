let express = require('express');
let router = express.Router();
let fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    let todo = fs.readFileSync('./todo.json');
    let data = JSON.parse(todo);

    res.render('index', {
        title: data.title,
        task1: data.task1,
        task2: data.task2,
        task3: data.task3,
        task4: data.task4
    });
});

module.exports = router;
