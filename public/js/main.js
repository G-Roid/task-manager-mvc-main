console.log('main js loaded')

const allTasks = document.querySelectorAll('i')

Array.from(allTasks).forEach(element => {
    element.addEventListener('click', deleteTask)
})

async function deleteTask() {
    const itemText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch('/tasks/deleteTask', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({'taskFromJSFile': itemText})
        })
        location.reload()
        
    } catch (error) {
        console.log(error)
    }
}