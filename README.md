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

**You can now use POST requests to the server. See "Socket Messages" for more information.
Alternatively you can open the web interface: ``http://localhost:9999/interface``.**

If you want to use an [Auto Hotkey](https://www.autohotkey.com/) script, gewi made a script which can be found [here](http://ix.io/2dM3/AHK).

### Ports
The Todo list uses the following ports: 
* 9999 for the display. (can be changed in ``./bin/www.js``)
* 10000 for the sockets. (can be changed in ``./public/javascripts/webSocket.js``, ``./public/javascripts/interface.js``, ``./routes/send.js`` and ``app.js``)

### Socket Messages
To send a message just send a request to ``localhost:9999/send?function=[function]``. The following functions are allowed: 

| Function         | Description                                                                   |
| ---------------- | :---------------------------------------------------------------------------: |
| show             | Show the todo list.                                                           |
| hide             | Hide the todo list.                                                           |
| reload           | Reload the todo list.                                                         |
| stop             | Stop the program.                                                             |
| toggleTaskOne    | Toggle task one.                                                              |
| toggleTaskTwo    | Toggle task two.                                                              |
| toggleTaskThree  | Toggle task three.                                                            |
| toggleTaskFour   | Toggle task four.                                                             |
| settaskOne-...   | Change the value for task one. The text after the `-` is the new task text.   |
| settaskTwo-...   | Change the value for task two. The text after the `-` is the new task text.   |
| settaskThree-... | Change the value for task three. The text after the `-` is the new task text. |
| settaskFour-...  | Change the value for task four. The text after the `-` is the new task text.  |

# Credits
* [Sireisenblut](https://www.youtube.com/channel/UCLVdGYbBIjozAaOTZEV4K2A) for the background image.
* gewi for making an Auto Hotkey Script.