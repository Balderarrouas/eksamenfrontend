let append = document.querySelector('.appendHere')


async function fetchAllCandidates(){
    await getCandidates();
    displayCandidates();
}

fetchAllCandidates();







function displayCandidates(){


    for (let key of candidateMap.keys()){
        let candidateObj = candidateMap.get(key)


        const candidateName = document.createElement('h1')
        candidateName.innerHTML = "Navn på Kandidat"

        const actualName = document.createElement('p')
        actualName.innerHTML = candidateObj.name

        const candidateLastName = document.createElement('h1')
        candidateLastName.innerHTML = "Efternavn på Kandidat"

        const actualLastName = document.createElement('p')
        actualLastName.innerHTML = candidateObj.lastName

        const candidateAge = document.createElement('h1')
        candidateAge.innerHTML = "Alder på Kandidat"

        const actualAge = document.createElement('p')
        actualAge.innerHTML = candidateObj.age

        const candidateParty = document.createElement('h1')
        candidateParty.innerHTML = "Tilhørende Parti"

        const actualParty = document.createElement('p')
        actualParty.innerHTML =  candidateObj.party.partyName;

        const editBtn = document.createElement('input')
        editBtn.type = 'button'
        editBtn.setAttribute('class', 'editButton')
        editBtn.setAttribute('value', 'Opdater Kandidat')
        editBtn.onclick = function (){


            const editName = document.createElement('input')
            editName.setAttribute('value', candidateObj.name)

            const editLastName = document.createElement('input')
            editLastName.setAttribute('value', candidateObj.lastName)

            const editAge = document.createElement('input')
            editAge.setAttribute('value', candidateObj.age)










            const submitChanges = document.createElement('input')
            submitChanges.type = 'button'
            submitChanges.setAttribute('value', 'Gennemfør Ændringer')
            submitChanges.setAttribute('class', 'subtmitButton')
            submitChanges.onclick = function () {
                console.log('submitbutton pressed')

                updateCandidate(candidateObj.candidateId, editName.value, editLastName.value, editAge.value);
               location.href = "../html/Candidates.html"
            }


            actualName.appendChild(editName)
            actualLastName.appendChild(editLastName)
            actualAge.appendChild(editAge)
            actualAge.appendChild(submitChanges)


        }




        const deleteBtn = document.createElement('input')
        deleteBtn.type = 'button'
        deleteBtn.setAttribute('class', 'deleteButton')
        deleteBtn.setAttribute('value', 'Slet Kandidat')
        deleteBtn.onclick = function(){

            console.log(candidateObj.candidateId)
            deleteCandidate(candidateObj.candidateId)
            location.href = "../html/Candidates.html"

        }


        append.appendChild(candidateName)
        append.appendChild(actualName)
        append.appendChild(candidateLastName)
        append.appendChild(actualLastName)
        append.appendChild(candidateAge)
        append.appendChild(actualAge)
        append.appendChild(candidateParty)
        append.appendChild(actualParty)
        append.appendChild(editBtn)
        append.appendChild(deleteBtn)


    }
}

async function deleteCandidate(id){

    const URL = "http://localhost:8080/candidate/delete/"+id;


    const deleteMapObj = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: ""
    }

    await fetch(URL, deleteMapObj);
}

async function updateCandidate(id, updatedName, updatedLastName, updatedAge){

    const URL = "http://localhost:8080/candidate/update/"+id;

    const updatedCandidateJson = {
        "candidateId": id,
        "name": updatedName,
        "lastName": updatedLastName,
        'age': updatedAge,
        "party": ""
    }

    const updateMapObj = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCandidateJson)
    }
    await fetch(URL, updateMapObj)
}



