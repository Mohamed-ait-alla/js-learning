/**
 * Lab: Create a Deep Flattening Tool
 * 
 * Description: In this lab, you will be implementing an array flattening algorithm.
 *              Flattening an array means turning a nested array of any depth into a single,
 *              one-dimensional array. The process extracts all elements in order,
 *              unwrapping only arrays. Other types are left unchanged.
 * 
 * Example: ( [[["a"]], [["b"]]] ) → ["a", "b"]
 */


function steamrollArray(nestedArray) {
  const result = nestedArray.reduce((flat, item) => {
    if (Array.isArray(item)){
      return flat.concat(steamrollArray(item));
    } else {
      return flat.concat(item);
    }
  }, []);

  return result;
}

console.log(steamrollArray([1, {"foo": "bar"}, [2]])) // [ 1, { foo: 'bar' }, 2 ]