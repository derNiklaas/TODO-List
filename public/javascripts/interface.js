const webSocket = new WebSocket('ws://localhost:10000');
let visibilityState = true;

function press(sender) {
    switch (sender) {
        case 'toggleVisibility': {
            toggleButton('reloadButton');
            if (visibilityState) {
                webSocket.send('hide');
            } else {
                webSocket.send('show');
            }
            visibilityState = !visibilityState;
            break;
        }
        case 'reload': {
            visibilityState = true;
            webSocket.send('reload');
            location.reload();
            break;
        }
        case 'toggleTaskOne': {
            toggleButton('taskOne');
            webSocket.send(sender);
            break;
        }
        case 'toggleTaskTwo': {
            toggleButton('taskTwo');
            webSocket.send(sender);
            break;
        }
        case 'toggleTaskThree': {
            toggleButton('taskThree');
            webSocket.send(sender);
            break;
        }
        case 'toggleTaskFour': {
            toggleButton('taskFour');
            webSocket.send(sender);
            break;
        }
        default: {
            webSocket.send(sender);
        }
    }
}

function toggleButton(button) {
    let element = document.getElementById(button);
    if (element.classList.contains("toggled")) {
        element.classList.remove("toggled");
    } else {
        element.classList.add("toggled");
    }
}