const handler = {
    set: function(obj, prop, value) {
        obj[prop] = value
        return true
    }
};

export const projectContext = new Proxy(
    {
        projects: [],
        selectedProject: {},
    },
    handler
);

export const actions = {
    setProjects: (projects) => {
        projectContext.projects = projects
    },
    setSelectedProject: (project) => {
        projectContext.selectedProject = project  
    }

}