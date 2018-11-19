var electron = require('electron').remote;

function minimizeWindow() {
    electron.getCurrentWindow().minimize();
}

function maximizeWindow() {
    electron.getCurrentWindow().maximize();
}

function closeWindow() {
    electron.getCurrentWindow().close();
}

document.addEventListener("keydown", function (e) {
    if (e.which === 123) {
        electron.getCurrentWindow().toggleDevTools();
    } else if (e.which === 116) {
        location.reload();
    }
});