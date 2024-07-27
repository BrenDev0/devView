const { newSubComponent, getAllSubComponents, findSubComponent, deleteSubComponent, updateSubComponentData } = require("../controllers/subComponentsController")


const subComponentsRouter = (event, payload) => {
    switch(payload.route){
        case 'new-sub-component':
            newSubComponent(payload.data)
            break;

        case 'get-all-sub-components':
            let subComponents = getAllSubComponents()
            return subComponents;
        
        case 'find-sub-component':
            let subcomponent = findSubComponent(payload.id)
            return subcomponent;

        case 'delete-sub-component':
            deleteSubComponent(payload.id)
            break;
            
        case 'updata-data':
            updateSubComponentData(payload.data)
            break;
            
        default:
            break;    
    }
}

module.exports = subComponentsRouter