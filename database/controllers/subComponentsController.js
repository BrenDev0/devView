const { subComponentsDb } = require('../models.js')

const newSubComponent = (data) => {
    const stmt = subComponentsDb.prepare("INSTERT OR IGNORE INTO subComponents (componentid, name, status, description) VALUES = (?,?,?,?)")
    stmt.run(data)
}

const getAllSubComponents = (id) => {
    const stmt = ("SELECT * FROM subComponents WHERE componentid = ?")

    return new Promise((resolve, reject) => {
        subComponentsDb.all(stmt, [id], (err, rows) =>{
            if (err) {
                reject(err)
            }
            else {
                resolve(rows ? rows : console.log("Component has no sub components registered"))
            }
        })
    })
}

const findSubComponent = (id) => {
    const stmt = ("SELECT * FROM subComponents WHERE subid = ?")

    return new Promise((resolve, reject) => {
        subComponentsDb.get(stmt, [id], (err, row) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(row ? row : console.log('Component Not Found'))
            }
        })
    })
}

const deleteSubComponent = (id) => {
    const stmt = ("DELETE FROM subComponents WHERE subid = ?")

    subComponentsDb.run(stmt, [id], (err) => {
        if (err) {
            return console.log(err.message)
        }
        else {
            return console.log('Sub Component Deleted')
        }
    })
}

const updateSubComponentData = (data) => {
    let stmt = ""
    switch (data.col) {
        case "NAME":
            stmt = ("UPDATE subComponents SET name = ? WHERE subid = ?")
            subComponentsDb.run(stmt, [data.value, data.id], (err) => {
                if (err){
                    return console.log(err.message)
                }
                return console.log('Updated: Name')
            })
            break

        case "LANGUAGE":
            stmt = ("UPDATE subComponents SET language = ? WHERE subid = ?")
            subComponentsDb.run(stmt, [data.value, data.id], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                return console.log(`Updated: Language`)
            }) 
            break

        case "STATUS":
            stmt = ("UPDATE subComponents SET status = ?  WHERE subid = ?") 
            subComponentsDb.run(stmt, [data.value, data.id], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                return console.log('Updated: Status')
            }) 
            break

        case "DESCRIPTION":
            stmt = ("UPDATE subComponents SET description = ? WHERE subid = ?")
            subComponentsDb.run(stmt, [data.value, data.id], (err) => {
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

module.exports = { newSubComponent, getAllSubComponents, findSubComponent, deleteSubComponent, updateSubComponentData}