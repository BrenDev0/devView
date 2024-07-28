import { projectLister } from './frontend/components/projectLister.js'  

const projects = await window.projectsAPI.getAllProjects()

projectLister(projects)

