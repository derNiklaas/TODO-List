const webSocket = new WebSocket('ws://localhost:10000');

webSocket.addEventListener('message', (message) => {
    console.log(message.data);
    switch (message.data) {
        case "hide": {
            document.getElementById('blog').classList.add('hide');
            document.getElementById('blog').classList.remove('show');
            break;
        }
        case "show": {
            document.getElementById('blog').classList.remove('hide');
            document.getElementById('blog').classList.add('show');
            break;
        }
        case "toggleTaskOne": {
            if (document.getElementById('taskOne').classList.contains('finished')) {
                document.getElementById('taskOne').classList.remove('finished');
            } else {
                document.getElementById('taskOne').classList.add('finished');
            }
            break;
        }
        case "toggleTaskTwo": {
            if (document.getElementById('taskTwo').classList.contains('finished')) {
                document.getElementById('taskTwo').classList.remove('finished');
            } else {
                document.getElementById('taskTwo').classList.add('finished');
            }
            break;
        }
        case "toggleTaskThree": {
            if (document.getElementById('taskThree').classList.contains('finished')) {
                document.getElementById('taskThree').classList.remove('finished');
            } else {
                document.getElementById('taskThree').classList.add('finished');
            }
            break;
        }
        case "toggleTaskFour": {
            if (document.getElementById('taskFour').classList.contains('finished')) {
                document.getElementById('taskFour').classList.remove('finished');
            } else {
                document.getElementById('taskFour').classList.add('finished');
            }
            break;
        }
    }
});