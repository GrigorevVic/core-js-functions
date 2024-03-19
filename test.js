
 // const getId10 = gerIdGenerator(10);
/*   getId4() => 4
*   getId10() => 10
*   getId4() => 5
*   getId4() => 6
*   getId4() => 7
*   getId10() => 11
*/

function getIdGeneratorFunction(startFrom) {
    let count = startFrom - 1;
    function f() {
    count += 1;
    return count;
    }
    return f;
  }
const getId4 = getIdGeneratorFunction(4);
console.log(getId4())
console.log(getId4())
console.log(getId4())