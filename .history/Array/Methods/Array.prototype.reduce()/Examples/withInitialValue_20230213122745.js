//Whitout initial value.

//The code below shows what happens if we call reduce() with an array and no initial value.

console.log('Without initial value')

const arrayA = [15, 16, 17, 18, 19]

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  )
  return returns
}

arrayA.reduce(reducer)

/*

The callback would be invoked four times, with the arguments and return values in each call being as follows:

accumulator	currentValue	index	Return value
First call	    15	        16	  1	    31
Second call	    31	        17	  2	    48
Third call	    48	        18	  3	    66
Fourth call	    66        	19	  4	    85

The array parameter never changes through the process — it's always [15, 16, 17, 18, 19]. The value returned by reduce() would be that of the last callback invocation (85).

*/

//With initial value.

//Here we reduce the same array using the same algorithm, but with an initialValue of 10 passed as the second argument to reduce():

console.log('With initial value')

const arrayB = [15, 16, 17, 18, 19]

const resultB = arrayB.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
)

console.log(resultB)

/*
The callback would be invoked five times, with the arguments and return values in each call being as follows:

accumulator	currentValue	index	Return value
First call	10	15	0	25
Second call	25	16	1	41
Third call	41	17	2	58
Fourth call	58	18	3	76
Fifth call	76	19	4	95
The value returned by reduce() in this case would be 95.
*/
