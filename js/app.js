class App{
    addPet(){
        event.preventDefault()
        let animal = document.querySelector("select[name='animal']").value
        let name = document.querySelector("input[name='name']").value
        let sex = document.querySelector("select[name='sex']").value
        let kg = document.querySelector("input[name='kg']").value

        let pet = new Pet(animal, name, sex, kg)
        this.addPetList(pet)
        this.cleanForm()
    }

    addPetList(pet){
        let ListElement = document.createElement("li")
        let petInfo = "Animal: " + pet.animal + " (Nome: " + pet.name + ", sexo: " + pet.sex + " ," + pet.kg + "kg)"

        ListElement.innerHTML += petInfo
        let buttonToRemove = this.createRemoveButton()
        ListElement.appendChild(buttonToRemove)
        document.getElementById("pets").appendChild(ListElement)
    }

    createRemoveButton(){
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }

    cleanForm(){
        document.querySelector("input[name='kg']").value = ""
        document.querySelector("input[name='kg']").checked = false
    }

    remove(){
        let liToRemove = event.target.parentNode
        document.getElementById("pets").removeChild(liToRemove)
    }
    

}