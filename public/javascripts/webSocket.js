const webSocket = new WebSocket('ws://localhost:10000');

webSocket.addEventListener('message', (message) => {
    console.log(message.data);
    switch (message.data) {
        case "hide": {
            document.getElementsByClassName('blog')[0].classList.add('hide');
            document.getElementsByClassName('blog')[0].classList.remove('show');
            break;
        }
        case "show": {
            document.getElementsByClassName('blog')[0].classList.remove('hide');
            document.getElementsByClassName('blog')[0].classList.add('show');
            break;
        }
        case "toggleTaskOne": {
            if (document.getElementsByClassName('taskOne')[0].classList.contains('finished')) {
                document.getElementsByClassName('taskOne')[0].classList.remove('finished');
            } else {
                document.getElementsByClassName('taskOne')[0].classList.add('finished');
            }
            break;
        }
        case "toggleTaskTwo": {
            if (document.getElementsByClassName('taskTwo')[0].classList.contains('finished')) {
                document.getElementsByClassName('taskTwo')[0].classList.remove('finished');
            } else {
                document.getElementsByClassName('taskTwo')[0].classList.add('finished');
            }
            break;
        }
        case "toggleTaskThree": {
            if (document.getElementsByClassName('taskThree')[0].classList.contains('finished')) {
                document.getElementsByClassName('taskThree')[0].classList.remove('finished');
            } else {
                document.getElementsByClassName('taskThree')[0].classList.add('finished');
            }
            break;
        }
        case "toggleTaskFour": {
            if (document.getElementsByClassName('taskFour')[0].classList.contains('finished')) {
                document.getElementsByClassName('taskFour')[0].classList.remove('finished');
            } else {
                document.getElementsByClassName('taskFour')[0].classList.add('finished');
            }
            break;
        }
    }
});