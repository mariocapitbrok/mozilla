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
;[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue
)
