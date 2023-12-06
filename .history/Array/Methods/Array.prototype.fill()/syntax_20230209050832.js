fill(value)
fill(value, start)
fill(value, start, end)

/*
Parameters
value
Value to fill the array with. Note all elements in the array will be this exact value: if value is an object, each slot in the array will reference that object.

start Optional
Zero-based index at which to start filling, converted to an integer.

Negative index counts back from the end of the array — if start < 0, start + array.length is used.
If start < -array.length or start is omitted, 0 is used.
If start >= array.length, no index is filled.
end Optional
Zero-based index at which to end filling, converted to an integer. fill() fills up to but not including end.

Negative index counts back from the end of the array — if end < 0, end + array.length is used.
If end < -array.length, 0 is used.
If end >= array.length or end is omitted, array.length is used, causing all indices until the end to be filled.
If end is positioned before or at start after normalization, no index is filled.
Return value
The modified array, filled with value.
*/
