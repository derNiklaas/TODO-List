let express = require('express');
let router = express.Router();
let fs = require('fs');

/* GET interface page. */
router.get('/interface', function (req, res, next) {
    let todo = fs.readFileSync('./todo.json');
    let data = JSON.parse(todo);
    res.render('interface', {
        title: "Interface",
        task1: data.task1,
        task2: data.task2,
        task3: data.task3,
        task4: data.task4
    });
});

module.exports = router;
