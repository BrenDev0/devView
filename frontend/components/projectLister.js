import { highlight } from "../utils/highlight.js"
import { tabsContext, actions } from "../context/tabsContext.js"

export const projectLister = (projects) => {
   const ul = document.getElementById('projects')

   projects.forEach((project) => {
      let li = document.createElement('li')
      li.setAttribute('class', 'project')
      li.setAttribute('value', project.projectid)
      li.appendChild(document.createTextNode(project.name))
      li.addEventListener('click', (e) => {
         highlight(e, 'project');
         actions.addTab(project)
      })
      
      ul.appendChild(li)
   })

}




