slice()
slice(start)
slice(start, end)

/*
Parameters
  start Optional
    Zero-based index at which to start extraction, converted to an integer.

      Negative index counts back from the end of the array — if start < 0, start + array.length is used.
      If start < -array.length or start is omitted, 0 is used.
      If start >= array.length, nothing is extracted.

  end Optional
    Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

      Negative index counts back from the end of the array — if end < 0, end + array.length is used.
      If end < -array.length, 0 is used.
      If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
      If end is positioned before or at start after normalization, nothing is extracted.

Return value
  A new array containing the extracted elements.
*/
