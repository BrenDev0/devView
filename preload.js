const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('projectsAPI', {
    newProject: (data) => ipcRenderer.send('new-project', data),
    getAllProjects: () => ipcRenderer.send('get-all-projects'),
    findProject: (id) => ipcRenderer.send('find-project', id),
    deleteProject: (id) => ipcRenderer.send('delete-project', id),
    updateData: (data) => ipcRenderer.send('update-data', data)
})
