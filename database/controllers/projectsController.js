const { db } =  require('../models.js')

const newProject = (event, data) => {
    const stmt = db.prepare("INSERT OR IGNORE INTO projects (name, language, status, description) VALUES (?,?,?,?)")
    stmt.run(data) 
}

const getAllProjects = () => {
    const stmt = "SELECT * FROM projects"
    db.all(stmt, [], (err, rows) => {
        const projects  = []
        if (err) {
            throw err
        }

        rows.forEach((row) => {
            projects.push(row)
        })
        return projects
    })
}


module.exports = { newProject, getAllProjects }

