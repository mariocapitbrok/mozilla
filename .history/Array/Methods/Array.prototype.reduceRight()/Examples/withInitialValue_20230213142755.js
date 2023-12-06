// How reduceRight() works without an initial value

/*
The call to the reduceRight callbackFn would look something like this:
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});

The first time the function is called, the accumulator and currentValue can be one of two values. If an initialValue was provided in the call to reduceRight, then accumulator will be equal to initialValue and currentValue will be equal to the last value in the array. If no initialValue was provided, then accumulator will be equal to the last value in the array and currentValue will be equal to the second-to-last value.

If the array is empty and no initialValue was provided, TypeError would be thrown. If the array has only one element (regardless of position) and no initialValue was provided, or if initialValue is provided but the array is empty, the solo value would be returned without calling callbackFn.
*/

//Some example run-throughs of the function would look like this:
const result = [0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue
)

console.log(result)

/*
The callback would be invoked four times, with the arguments and return values in each call being as follows:

accumulator	currentValue	index	Return value
First call	      4	        3	    3	     7
Second call	      7	        2	    2	     9
Third call	      9	        1	    1	    10
Fourth call	     10	        0	    0	    10

The array parameter never changes through the process — it's always [0, 1, 2, 3, 4]. The value returned by reduceRight would be that of the last callback invocation (10).
*/

// How reduceRight() works with an initial value
const resultB = [0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10
)

console.log(resultB)

/*
accumulator	currentValue	index	Return value
First call	      10	      4	    4	    14
Second call	      14	      3	    3	    17
Third call	      17	      2	    2	    19
Fourth call	      19	      1	    1	    20
Fifth call	      20	      0	    0	    20
The value returned by reduceRight this time would be, of course, 20.
*/
