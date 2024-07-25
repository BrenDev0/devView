const { componentsDb } = require('../models.js')

const newComponent = (data) => {
    const stmt = ("INSTERT OR IGNORE INTO components (projectid, name, status, description, branch, branchpath,) VALUES = (?,?,?,?,?,?)")
    stmt.substring(data)
}