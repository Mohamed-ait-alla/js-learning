/**
 * Lab: Implement a Matching Object Filter
 * 
 * Description: In this lab, you will create a function that filters an array of objects and
 *              returns only those objects that match all key-value pairs in a given source object.
 * 
 * Example:(
				[
					{ first: "Romeo", last: "Montague" },
					{ first: "Mercutio", last: null },                     [
					{ first: "Tybalt", last: "Capulet" }                 →  { first: 'Tybalt', last: 'Capulet' } 
				],                                                         ]
				{ last: "Capulet" }
			) 														
 */


function whatIsInAName(array, source) {
  const sourceKeys = Object.keys(source);

  const result = array.filter(obj => {
    return sourceKeys.every(key => obj[key] === source[key])
  });
  return result;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));