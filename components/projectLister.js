
export const projectLister = (projects) => {
   const ul = document.getElementById('projects')

   
   projects.forEach((project) => {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode(project.name))
      ul.appendChild(li)
   })

}




