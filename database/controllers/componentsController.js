const { componentsDb } = require('../models.js')

const newComponent = (data) => {
    const stmt = componentsDb.prepare("INSTERT OR IGNORE INTO components (projectid, name, status, description, branch, branchpath,) VALUES = (?,?,?,?,?,?)")
    stmt.run(data)
}

const getAllProjectComponents = (id) => {
    const stmt = ("SELECT * FROM components WHERE projectid = ?")

    return new Promise((resolve, reject) => {
        componentsDb.all(stmt, [id], (err, rows) =>{
            if (err) {
                reject(err)
            }
            else {
                resolve(rows ? rows : console.log("Project has no component registered"))
            }
        })
    })
}

const findComponent = (id) => {
    const stmt = ("SELECT * FROM components WHERE componentid = ?")

    return new Promise((resolve, reject) => {
        componentsDb.get(stmt, [id], (err, row) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(row ? row : console.log('Component Not Found'))
            }
        })
    })
}

const deleteComponent = (id) => {
    const stmt = ("DELETE FROM components WHERE componentid = ?")

    componentsDb.run(stmt, [id], (err) => {
        if (err) {
            return console.log(err.message)
        }
        else {
            return console.log('Component Deleted')
        }
    })
}

const updateComponentData = (data) => {
    let stmt = ""
    switch (data.col) {
        case "NAME":
            stmt = ("UPDATE components SET name = ? WHERE componentid = ?")
            componentsDb.run(stmt, [data.value, data.id], (err) => {
                if (err){
                    return console.log(err.message)
                }
                return console.log('Updated: Name')
            })
            break
        case "LANGUAGE":
            stmt = ("UPDATE components SET language = ? WHERE componentid = ?")
            componentsDb.run(stmt, [data.value, data.id], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                return console.log(`Updated: Language`)
            }) 
            break
        case "STATUS":
            stmt = ("UPDATE components SET status = ?  WHERE componentid = ?") 
            componentsDb.run(stmt, [data.value, data.id], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                return console.log('Updated: Status')
            }) 
            break
        case "DESCRIPTION":
            stmt = ("UPDATE components SET description = ? WHERE componentid = ?")
            componentsDb.run(stmt, [data.value, data.id], (err) => {
                if (err){
                    return console.log(err.message)
                }
                return console.log('Updated: Discription')
            }) 
            break     
        case "BRANCH":
            stmt = ("UPDATE components SET branch = ? WHERE componentid = ?")
            componentsDb.run(stmt, [data.value, data.id], (err) => {
                if (err){
                    return console.log(err.message)
                }
                return console.log('Updated: Discription')
            }) 
            break     
        case "BRANCHPATHS":
            stmt = ("UPDATE components SET branchPaths = ? WHERE componentid = ?")
            componentsDb.run(stmt, [data.value, data.id], (err) => {
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

module.exports = { newComponent, getAllProjectComponents, findComponent, deleteComponent, updateComponentData }