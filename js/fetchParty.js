const getPartyURL = "http://localhost:8080/party/get";

async function fetchParties(){
    return fetch(getPartyURL).then(response => response.json());
}



async function callFetchParty() {

    const prom = fetchParties()
    await prom.then(createPartyMap)

}



let partyMap = new Map;

function createPartyMap(partyObj){
    partyObj.forEach(party =>{
        partyMap.set(party.partyId, party)
    })
}


async function getParties(){
    await callFetchParty()
}