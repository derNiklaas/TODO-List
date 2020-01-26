# Todo List

## Installation
1. Download this [repository](https://github.com/derNiklaas/TODO-List/releases).
2. Make sure that you [Node.JS](https://nodejs.org/) installed.
3. Open a console and run ``npm install``.
4. Yaaay. \o/

## Usage
1. Open a console and run ``npm run start``.
2. Change your Todo list entries in the ``todo.json`` file.
3. Create a browser source in OBS with the following URL: ``http://localhost:9999/``. 

**You can now use some AHK scripts to send messages to the WebSocketServer running on port 10000.**

### Ports
The Todo list uses the following ports: 
* 9999 for the display. (can be changed in ``./bin/www.js``)
* 10000 for the sockets. (can be changed in ``./public/javascripts/webSocket.js`` and ``app.js``)

### Socket Messages
* ``show`` Show the todo list.
* ``hide`` Hide the todo list.
* ``toggleTaskOne`` Toggle task one.
* ``toggleTaskTwo`` Toggle task two.
* ``toggleTaskThree`` Toggle task three.
* ``toggleTaskFour`` Toggle task four.

# Credits
* [Sireisenblut](https://www.youtube.com/channel/UCLVdGYbBIjozAaOTZEV4K2A) for the background image.