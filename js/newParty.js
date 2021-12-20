





let postRequestParty = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: ""
}

let partyJson = {
    "partyId": "",
    "partyName": "",
    "partyAbbreviation": ""

}

function createParty(){
    const URL = "http://localhost:8080/party/save";

    let partyNameValue = document.getElementById('nameofParty')
    let partyAbbreviationValue = document.getElementById('abbreviation')

    partyJson.partyName = partyNameValue.value;
    partyJson.partyAbbreviation = partyAbbreviationValue.value;

    postRequestParty.body = JSON.stringify(partyJson)
    fetch(URL, postRequestParty).catch((error)=> console.log(error))


    location.href = "../html/newParty.html"

}
const addPartyButton = document.querySelector('.addPartyBtn')
addPartyButton.addEventListener('click', createParty)