
export const projectLister = (projects) => {
   const ul = document.getElementById('projects')

   
   projects.forEach((project) => {
      let li = document.createElement('li')
      li.setAttribute('class', 'project')
      li.setAttribute('value', project.projectid)
      li.appendChild(document.createTextNode(project.name))
      
      ul.appendChild(li)
   })

}




