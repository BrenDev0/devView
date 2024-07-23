const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/projects.db');
const compopnentDb = new sqlite3.Database('./database/components.db')
const subComponentsDb = new sqlite3.Database('./database/subComponents.db')


// projects database
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS projects (projectid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, language TEXT, status TEXT, description TEXT)")
    compopnentDb.get("PRAGMA foreign_keys = ON")
    compopnentDb.run("CREATE TABLE IF NOT EXISTS components (componentid INTEGER PRIMARY KEY AUTOINCREMENT, projectid INTEGER NOT NULL, name TEXT, status TEXT, description TEXT, branch TEXT, branchPaths TEXT, FOREIGN KEY (projectid) REFERENCES projects (projectid) ON DELETE CASCADE)")
    subComponentsDb.get("PRAGMA foreign_keys = ON")
    subComponentsDb.run("CREATE TABLE IF NOT EXISTS subcomponents (subid INTEGER PRIMARY KEY AUTOINCREMENT, componentid INTEGER NOT NULL, name TEXT, status TEXT, decription TEXT, branch TEXT, branchPaths TEXT, FOREIGN KEY (componentid) REFERENCES components (componentid) ON DELETE CASCADE)")
})

module.exports = { db, compopnentDb, subComponentsDb}







    


    

