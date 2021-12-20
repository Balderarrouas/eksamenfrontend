
async function fetchFirst(){
    await getParties()
    createDropDown()
}
fetchFirst()


let dropdownmenu = document.querySelector('.dropdown')

let addBtn = document.querySelector('.addCandidateBtn');
addBtn.addEventListener('click', function (){
    console.log("Button pressed")
    createCandidate()
    location.href = "../html/newCandidate.html"
})


let postRequestCandidate = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: ""
}

let candidateJson = {
    "candidateId": "",
    "name": "",
    "lastName": "",
    "age": "",
    "party": ""

}





function createCandidate(){

    const URL =  "http://localhost:8080/candidate/save";

    let nameValue = document.getElementById('name')
    let lastNameValue = document.getElementById('lastName')
    let ageValue = document.getElementById('age')

    candidateJson.name = nameValue.value;
    candidateJson.lastName = lastNameValue.value;
    candidateJson.age = ageValue.value;
    candidateJson.party = {partyId : dropdownmenu.value};

    postRequestCandidate.body = JSON.stringify(candidateJson)
    fetch(URL, postRequestCandidate).catch((error) => console.log(error));

}

function createDropDown(){
    for (let i of partyMap.keys()){
        const options = document.createElement("option");
        options.innerHTML = partyMap.get(i).partyName;
        options.value = partyMap.get(i).partyId;
        dropdownmenu.appendChild(options);
    }
}



