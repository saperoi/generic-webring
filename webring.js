const indexLink = 'https://webring.website/index.html';

const members = [
  { name: "sapero", site: "https://sapero.neocities.org/" },
  { name: "examplecom", site: "https://example.com/" },
  { name: "exampleorg", site: "https://example.org/"}
];

var memberIndex = {
  "sapero": 0,
  "examplecom": 1,
  "exampleorg": 2
}

function getMember(member) {
  try { return members[ (memberIndex[member]) ].site; }
  catch(_) { return indexLink; } 
}

function nextMember(member) {
  try { return members[ (memberIndex[member]+1) % members.length ].site; }
  catch(_) { return indexLink; } 
}

function previousMember(member) {
  try { return members[ (memberIndex[member]+members.length-1) % members.length ].site; }
  catch(_) { return indexLink; } 
}

function randomMember() {
  return members[ Math.floor((Math.random()*members.length)) ].site;
}
