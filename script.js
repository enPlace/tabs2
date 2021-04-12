let tabs = document.querySelectorAll(".tab")
let tabContent = document.querySelectorAll("[data-tab-content]")
let tabForm =document.querySelector("#add-tab")
let tabInput =document.querySelector("#tab-input")
let tabContainer = document.querySelector("#tab-container")
let contentContainer = document.querySelector("#content-container")


//Add an event listener that makes class ="active" for clicked tab and related content.
//It also has to remove "active" from all tabs to make sure that no two tab/content pairs have"active" at same time
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



/* Next, we want to use the form to add a new tab. This will: 
-make a new tab
-make associated content
-fill in content, attributes, and tab text automatically, with text generated from 
the input field
-replace event listener on tabs
 */
tabForm.addEventListener('submit', e=>{
    e.preventDefault()
    const inputValue =tabInput.value
    const listLength= document.querySelectorAll(".tab").length
    const newLi = document.createElement("li")
    const newDiv =document.createElement("div")
    const newH1 = document.createElement("h1")
    const newP = document.createElement("p")

    newLi.textContent = inputValue
    newLi.classList = "tab"
    newLi.setAttribute("id", `newtab${listLength+1}`)

    //clone and replace tabs to remove event listener
    tabs.forEach(tab=>{
        tab.replaceWith(tab.cloneNode(true))
    })
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

    //we have tabs and content, now to re-add the event listener to all tabs 

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

   tabForm.reset()






    



    
   /* we want to: 
   1. add new li for tab
   2. make the text content that is the submit value 
   3. add class tab for styling
   4. clone and replace all tabs to add event listener again
   
   5. add a data-tab-target attribute with `newtab${listLength+1}`
   
   . make new div for content, with : 
   . id of newtab${listLength+1}
   . attribute of data-tab-content
   . header
   . p

   .append to document
   .reset tabs and tabContent 
   .reset tab form 

   
   7. */
})

