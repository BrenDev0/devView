import { tabsContext, actions } from "../context/tabsContext.js"

export const tabs = () => {
    const con = document.getElementById('tabs')
    
    const interval = () => {
        const check = setInterval(() => { 
            let currentTabs =  document.getElementsByClassName('tab')

            if(currentTabs.length !== tabsContext.tabs.length ){
                for(let i = 0; i < tabsContext.tabs.length; i++){
                    if(currentTabs.length === 0){
                        const button = document.createElement('button')
                        button.setAttribute('class', 'tab')
                        button.setAttribute('value', tabsContext.tabs[i].name)
                        button.appendChild(document.createTextNode(tabsContext.tabs[i].name))

                        con.appendChild(button)
                    }
                    else {
                        for (let j = 0; j < currentTabs.length; j++){
                            if (tabsContext.tabs[i].name !== currentTabs[j].value){
                                const button = document.createElement('button')
                                button.setAttribute('class', 'tab')
                                button.setAttribute('value', tabsContext.tabs[i].name)
                                button.appendChild(document.createTextNode(tabsContext.tabs[i].name))
    
                                return con.appendChild(button)
                            }
                            else {
                               null
                            }
                        }
                    }
                }
            }
            
        }, 500)
    
        return () => clearInterval(check)
    }

    interval()
}