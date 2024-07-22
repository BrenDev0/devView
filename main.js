const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const db = require('./database/models.js')
const { newProject, getAllProjects } = require('./database/controllers/projectsController.js')


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
    ipcMain.on('new-project', newProject)
    ipcMain.on('get-all-projects', getAllProjects )
    CreateWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            
            CreateWindow()
        }
    })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})