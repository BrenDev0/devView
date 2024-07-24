const { newProject, getAllProjects, findProject, deleteProject, updateProjectData } = require("../controllers/projectsController")


const projectRouter = (event, payload) => {
    switch(payload.route){
        case 'new-project':
            newProject(payload.data)
            break;

        case 'get-all-projects':
            let projects = getAllProjects()
            return projects; 

        case 'find-project':
            let project =  findProject(payload.id) 
            return project;  
            
        case 'delete-project':
            deleteProject(payload.id)
            break;
            
        case 'update-data':
            updateProjectData(payload.data)
            break;   
            
        default:
            break;    
    }
}

module.exports = projectRouter