const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('projectsAPI', {
    newProject: (data) => ipcRenderer.send('new-project', data),
    getAllProjects: () => ipcRenderer.send('get-all-projects')
})
