
/*
 * Lab: Build a Sentence Maker
 */

let adjective = "adj";
let noun = "noun";
let verb = "verb";
let place = "place";
let adjective2 = "adj2";
let noun2 = "noun2";

const firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + "." + " The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("First story: " + firstStory);

adjective = "newAdj";
noun = "newNoun";
verb = "newVerb";
place = "newPlace";
adjective2 = "newAdj2";
noun2 = "newNoun2";

const secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + "." + " The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("Second story: " + secondStory);
