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
            if (document.getElementById('taskOneStrikethrough').classList.contains('strike')) {
                document.getElementById('taskOneStrikethrough').classList.remove('strike');
                document.getElementById('taskOneNormal').classList.remove('strike');
            } else {
                document.getElementById('taskOneStrikethrough').classList.add('strike');
                document.getElementById('taskOneNormal').classList.add('strike');
            }
            break;
        }
        case "toggleTaskTwo": {
            if (document.getElementById('taskTwoStrikethrough').classList.contains('strike')) {
                document.getElementById('taskTwoStrikethrough').classList.remove('strike');
                document.getElementById('taskTwoNormal').classList.remove('strike');
            } else {
                document.getElementById('taskTwoStrikethrough').classList.add('strike');
                document.getElementById('taskTwoNormal').classList.add('strike');
            }
            break;
        }
        case "toggleTaskThree": {
            if (document.getElementById('taskThreeStrikethrough').classList.contains('strike')) {
                document.getElementById('taskThreeStrikethrough').classList.remove('strike');
                document.getElementById('taskThreeNormal').classList.remove('strike');
            } else {
                document.getElementById('taskThreeStrikethrough').classList.add('strike');
                document.getElementById('taskThreeNormal').classList.add('strike');
            }
            break;
        }
        case "toggleTaskFour": {
            if (document.getElementById('taskFourStrikethrough').classList.contains('strike')) {
                document.getElementById('taskFourStrikethrough').classList.remove('strike');
                document.getElementById('taskFourNormal').classList.remove('strike');
            } else {
                document.getElementById('taskFourStrikethrough').classList.add('strike');
                document.getElementById('taskFourNormal').classList.add('strike');
            }
            break;
        }
        case "reload": {
            location.reload();
            break;
        }
        case "stop": {
            webSocket.close();
            break;
        }
    }
});