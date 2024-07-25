const { newComponent, getAllProjectComponents, findComponent, deleteComponent, updateComponentData } = require("../controllers/componentsController")


const componentsRouter = (event, payload) => {
    switch(payload.route){
        case 'new-component':
            newComponent(payload.data)
            break;
        
        case 'get-all-project-components':
            let components = getAllProjectComponents()
            return components;

        case 'find-component':
            let component = findComponent(payload.id)  
            return component;

        case 'delete-component':
            deleteComponent(payload.id)
            break;
            
        case 'update-data':
            updateComponentData(payload.data)
            break;
            
        default:
            break;     
    }
}

module.exports = componentsRouter