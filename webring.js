const indexLink = 'https://webring.website/index.html';

const members = [
  { name: "sapero", site: "https://sapero.neocities.org/" },
  { name: "examplecom", site: "https://example.com/" },
  { name: "exampleorg", site: "https://example.org/"}
];

var memberIndex = [];
members.forEach(function(element) { memberIndex.push(element.name)} );

function getMember(member) {
  try { return members[ (memberIndex.indexOf(member)) ].site; }
  catch(_) { return indexLink; } 
}

function nextMember(member) {
  try { return members[ (memberIndex.indexOf(member)+1) % members.length ].site; }
  catch(_) { return indexLink; } 
}

function previousMember(member) {
  try { return members[ (memberIndex.indexOf(member)+members.length-1) % members.length ].site; }
  catch(_) { return indexLink; } 
}

function randomMember() {
  return members[ Math.floor((Math.random()*members.length)) ].site;
}
