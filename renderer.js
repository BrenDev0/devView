import { projectLister } from './frontend/components/projectLister.js'  
import { tabs } from './frontend/components/tabs.js'
import { projectContext, actions } from './frontend/context/projectsContext.js'

const projects = await window.projectsAPI.getAllProjects()
actions.setProjects(projects)

projectLister(projectContext.projects)
tabs()

