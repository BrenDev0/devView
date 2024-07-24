const { db } =  require('../models.js')

const newProject = (event, data) => {
    const stmt = db.prepare("INSERT OR IGNORE INTO projects (name, language, status, description) VALUES (?,?,?,?)")
    stmt.run(data) 
}

const getAllProjects = async(event) => {
    const stmt = ("SELECT * FROM projects")
    return new Promise((resolve, reject) => {
        db.all(stmt, [], (err, rows) => {
            if (err) {
                reject(err)
            }
            else{
                resolve(rows)
            }
        })
    })

        
}

const findProject = (event, id) => {
    const stmt = ("SELECT * FROM projects WHERE projectid = ?")

    return new Promise((resolve, reject) => {
        db.get(stmt, [id], (err, row) => {
            if(err) {
                reject(err)
            }
    
            resolve(row ? row : console.log('Project Not Found') )
        })
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
        case "NAME":
            stmt = ("UPDATE projects SET name = ? WHERE projectid = ?")
            db.run(stmt, [data.value, data.id], (err) => {
                if (err){
                    return console.log(err.message)
                }
                return console.log('Updated: Name')
            })
            break
        case "LANGUAGE":
            stmt = ("UPDATE projects SET language = ? WHERE projectid = ?")
            db.run(stmt, [data.value, data.id], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                return console.log(`Updated: Language`)
            }) 
            break
        case "STATUS":
            stmt = ("UPDATE projects SET status = ?  WHERE projectid = ?") 
            db.run(stmt, [data.value, data.id], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                console.log('Updated: Status')
            }) 
            break
        case "DESCRIPTION":
            stmt = ("UPDATE projects SET description = ? WHERE projectid = ?")
            db.run(stmt, [data.value, data.id], (err) => {
                if (err){
                    return console.log(err.message)
                }
                return console.log('Updated: Discription')
            }) 
            break     
        default:
            console.log("Update Failed")
            break    
    }
}


module.exports = { newProject, getAllProjects, findProject, deleteProject, updateProjectData }

