

const getCandidateURL = "http://localhost:8080/candidate/get";


async function fetchCandidates(){
    return fetch(getCandidateURL).then(response => response.json());
}

async function callFetchCandidates(){
    const prom = fetchCandidates();
    await prom.then(createMapForCandidates);
}




let candidateMap = new Map();


function createMapForCandidates(candidateObj){
    candidateObj.forEach(candidate =>{
        candidateMap.set(candidate.candidateId, candidate)
    })
}

async function getCandidates(){
    await callFetchCandidates();
}