console.log([1, 2, 3, 4, 5].copyWithin(-2))
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3))
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1))
// [1, 2, 3, 3, 4]

/*
Parameters
target
  Zero-based index at which to copy the sequence to, converted to an integer.

    Negative index counts back from the end of the array — if target < 0, target + array.length is used.
    If target < -array.length, 0 is used.
    If target >= array.length, nothing is copied.
    If target is positioned after start after normalization, copying only happens until the end of array.length (in other words, copyWithin() never extends the array).

start Optional
  Zero-based index at which to start copying elements from, converted to an integer.

    Negative index counts back from the end of the array — if start < 0, start + array.length is used.
    If start < -array.length or start is omitted, 0 is used.
    If start >= array.length, nothing is copied.

end Optional
  Zero-based index at which to end copying elements from, converted to an integer. copyWithin() copies up to but not including end.

    Negative index counts back from the end of the array — if end < 0, end + array.length is used.
    If end < -array.length, 0 is used.
    If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be copied.
    If end is positioned before or at start after normalization, nothing is copied.

Return value
  The modified array.    
*/
