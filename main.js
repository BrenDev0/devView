const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const db = require('./database/models.js')
const projectRouter = require('./database/routes/projectsRouter.js')
const componentsRouter = require('./database/routes/componentsRouter.js')
const subComponentsRouter = require('./database/routes/subComponentsRouter.js')



const CreateWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}



app.whenReady().then(() => {
    ipcMain.handle('projects', projectRouter)
    ipcMain.handle('components', componentsRouter)
    ipcMain.handle('sub-components', subComponentsRouter)
    CreateWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            ipcMain.handle('projects', projectRouter)
            ipcMain.handle('components', componentsRouter)
            CreateWindow()
        }
    })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})