const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('projectsAPI', {
    newProject: (data) => ipcRenderer.invoke('projects', {route: 'new-project', data: data}),
    getAllProjects: () => ipcRenderer.invoke('projects', {route: 'get-all-projects'}),
    findProject: (id) => ipcRenderer.invoke('projects', {route: 'find-project', id: id}),
    deleteProject: (id) => ipcRenderer.invoke('projects', {route: 'delete-project', id: id}),
    updateData: (data) => ipcRenderer.invoke('projects', {route: 'update-data', data: data})
})


contextBridge.exposeInMainWorld('componentsAPI', {
    newComponents: (data) => ipcRenderer.invoke('components', {route: 'new-component', data: data}),
    getAllComponents: () => ipcRenderer.invoke('components', {route: 'get-all-project-components'}),
    findComponents: (id) => ipcRenderer.invoke('components', {route: 'find-component', id: id}),
    deleteComponents: (id) => ipcRenderer.invoke('components', {route: 'delete-component', id: id}),
    updateData: (data) => ipcRenderer.invoke('components', {route: 'update-data', data: data})
})
