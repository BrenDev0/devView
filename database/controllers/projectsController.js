const { db } =  require('../models.js')

const newProject = (event, data) => {
    const stmt = db.prepare("INSERT OR IGNORE INTO projects (name, language, status, description) VALUES (?,?,?,?)")
    stmt.run(data) 
}

const getAllProjects = () => {
    const stmt = ("SELECT * FROM projects")
    
    db.all(stmt, [], (err, rows) => {
        const projects = []
        if (err) {
            return console.log(err.message)
        }

        rows.forEach((row) => {
            projects.push(row)
        })

        return projects
    })
    
}

const findProject = (event, id) => {
    const stmt = ("SELECT * FROM projects WHERE projectid = ?")

    db.get(stmt, [id], (err, row) => {
        if(err) {
            return console.log(err.message)
        }

        return row ? row : console.log('Project Not Found')
    })
    
} 

const deleteProject = (event, id) => {
    const stmt = ("DELETE FROM projects WHERE projectid = ?")
    db.run(stmt, [id], (err) => {
        if (err) {
            console.log(err.message)
        }
        console.log(`Deleted ${this.changes}`)
    })
}

const updateProjectData = (event, data) => {
    let stmt = ""
    switch (data.col) {
        case data.col === "NAME":
            stmt = ("UPDATE projects SET name = ? WHERE projectid = ?")
            db.run(stmt, [data.value, data.id], (err) => {
                if (err){
                    return console.log(err.message)
                }
                return console.log(`Updated ${this.changes}`)
            })
            break
        case data.col === "LANGUAGE":
            stmt = ("UPDATE projects SET language = ? WHERE projectid = ?")
            db.run(stmt, [data.value, data.id], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                return console.log(`Updatae: ${this.changes}`)
            }) 
            break
        case data.col === "STATUS":
            stmt = ("UPDATE projects SET status = ?  WHERE projectid = ?") 
            db.run(stmt, [data.value, data.id], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                return console.log(`Update: ${this.changes}`)
            }) 
            break
        case data.col === "DESCRIPTION":
            stmt = ("UPDATE projects SET description = ? WHERE projectid = ?")
            db.run(stmt, [data.value, data.id], (err) => {
                if (err){
                    return console.log(err.message)
                }
                return console.log(`Update: ${this.changes}`)
            }) 
            break     
        default:
            console.log("Update Failed")
            break    
    }
}


module.exports = { newProject, getAllProjects, findProject, deleteProject, updateProjectData }

