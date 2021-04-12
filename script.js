let tabs = document.querySelectorAll(".tab")
let tabContent = document.querySelectorAll("[data-tab-content]")


tabs.forEach(tab=>{
    tab.addEventListener('click', e=>{
        const target =document.querySelector(tab.dataset.tabTarget)

        tabs.forEach(tab =>{
            tab.classList.remove("active")
        })
    tab.classList.add("active")
    tabContent.forEach(content =>{
        content.classList.remove("active")
    })
    target.classList.add("active")
    })


})