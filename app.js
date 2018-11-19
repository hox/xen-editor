const {
    app,
    BrowserWindow,
    session
} = require('electron');
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1080,
        height: 720,
        frame: false
    });
    win.setMinimumSize(160, 90);
    win.setFullScreenable(false);
    win.loadFile('./src/index.html');
    //win.setPosition(1750, 6, true);
    win.setMenu(null);
    //win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
    win.setIcon(__dirname + "./src/img/icons/Xen_Logo_No_Text_Transparent.png");
    const ses = session.defaultSession;
    ses.webRequest.onBeforeRequest((details, callback) => {
        if (details.url.startsWith("http"))
            callback({
                cancel: true
            });
        else
            callback({});
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});