import { projectLister } from './components/projectLister.js'  

const projects = await window.projectsAPI.getAllProjects()

projectLister(projects)

