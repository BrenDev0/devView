const handler = {
    set: function(obj, prop, value){
        obj[prop] = value
        return true
    }
}

export const tabsContext = new Proxy (
    {
        tabs: []
    },
    handler
)

export const actions = {
    addTab: (tabData) => {
        tabsContext.tabs.push(tabData)
    },

    exitTab: (name) => {
        tabsContext.tabs = tabsContext.tabs.filter((tab) => tab.name !== name)
    }

}