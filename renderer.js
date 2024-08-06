import { projectLister } from './frontend/components/projectLister.js'  
import { tabs } from './frontend/components/tabs.js'
import { toolbar } from './frontend/components/toolbar.js'
import { projectContext, actions } from './frontend/context/projectsContext.js'

//toolbar 
toolbar()

//get projects
const projects = await window.projectsAPI.getAllProjects()
actions.setProjects(projects)

//list projects
projectLister(projectContext.projects)
tabs()

