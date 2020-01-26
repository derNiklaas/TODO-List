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
            document.getElementsByClassName('taskOne')[0].classList.add('')
            break;
        }
        case "toggleTaskTwo": {

            break;
        }
        case "toggleTaskThree": {

            break;
        }
        case "toggleTaskFour": {

            break;
        }
    }
});