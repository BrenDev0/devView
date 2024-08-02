import { tabsContext, actions } from "../context/tabsContext.js"

export const tabs = () => {
    const con = document.getElementById('tabs')
    const current = tabsContext.tabs
    console.log(current)

    const interval = () => {
        const check = setInterval(() => { 
            // for(let i = 0; i < tabsContext.tabs.length; i++){
            //     let button = document.createElement('button')
            //     button.setAttribute('class', 'tab')
            //     button.setAttribute('value', tabsContext.tabs[i].name)
            //     button.appendChild(document.createTextNode(tabsContext.tabs[i].name))
            
            //     con.appendChild(button)
            // } 
        }, 500)
    
        return () => clearInterval(check)
    }

    interval()
}