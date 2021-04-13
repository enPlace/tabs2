let tabs = document.querySelectorAll(".tab")
let tabContent = document.querySelectorAll("[data-tab-content]")
let tabForm =document.querySelector("#add-tab")
let tabInput =document.querySelector("#tab-input")
let tabContainer = document.querySelector("#tab-container")
let contentContainer = document.querySelector("#content-container")
const deleteButton = document.querySelector("#delete-button")


//Add an event listener that makes class ="active" for clicked tab and related content.
//It also has to remove "active" from all tabs to make sure that no two tab/content pairs have"active" at same time. 
//We'll do this with event delegation so that the function will work with new tabs added by the user. 
document.addEventListener('click', e=>{
    if (e.target.matches(".tab")){
        const targetContent = document.querySelector(e.target.dataset.tabTarget)
        tabs.forEach(tab=>{
            tab.classList.remove("active")
        })
        tabContent.forEach(content=>{
            content.classList.remove("active")
        })
        e.target.classList.add("active")
        targetContent.classList.add("active")

    }
})


//this form adds a tab, adds associated content, and adds all the attributes to make the 
//above functions and event listeners work for the new tab. 
tabForm.addEventListener('submit', e=>{
    e.preventDefault()
    const inputValue =tabInput.value
    const listLength= document.querySelectorAll(".tab").length
    if (inputValue ==""){
    }else{

    const newLi = document.createElement("li")
    const newDiv =document.createElement("div")
    const newH1 = document.createElement("h1")
    const newP = document.createElement("p")

    newLi.textContent = inputValue
    newLi.classList = "tab"
    newLi.setAttribute("id", `newtab${listLength+1}`)
    newLi.setAttribute("data-tab-target", `#new-content${listLength+1}`)
    tabContainer.appendChild(newLi)
    tabs = document.querySelectorAll(".tab")
    
    
    //now that we have our tabs, we need to add the content


    newDiv.setAttribute("id", `new-content${listLength+1}`)
    newDiv.setAttribute("data-tab-content", "")
    newH1.textContent =inputValue
    newP.textContent =`This is your new ${inputValue} tab.`
    newDiv.appendChild(newH1)
    newDiv.appendChild(newP)
    contentContainer.appendChild(newDiv)
    tabContent = document.querySelectorAll("[data-tab-content]")

   tabForm.reset()

}})

/* The delete button at the bottom is for deleting the current tab and its 
associated content. This will remove anything on the page that is labled with the class "active." 
It should also alert this user to make sure they want to delete this tab.  */

deleteButton.addEventListener('click', e=>{
    const active = document.querySelectorAll(".active")
    if(window.confirm("Are you sure you want to delete this tab?")){
        active.forEach(node=>
            node.parentNode.removeChild(node))
            tabs = document.querySelectorAll(".tab")
            const target = document.querySelector(tabs[0].dataset.tabTarget)
            target.classList = "active"
            tabs[0].classList ="active tab"
            console.log(tabs[0])
    }
    else{
        
    }
   
})