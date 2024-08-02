export const highlight = (event, name) => {
    const items = document.getElementsByClassName(name)
    
    for (let i = 0; i < items.length; i++){
        items[i].className = items[i].className.replace(' active', '')
    }

    event.currentTarget.className += ' active'
}