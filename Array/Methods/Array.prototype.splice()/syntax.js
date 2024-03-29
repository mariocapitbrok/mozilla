splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

/*
Parameters
start
  Zero-based index at which to start changing the array, converted to an integer.

    Negative index counts back from the end of the array — if start < 0, start + array.length is used.
    If start < -array.length or start is omitted, 0 is used.
    If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.

  deleteCount Optional
    An integer indicating the number of elements in the array to remove from start.

    If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.

    If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

    item1, …, itemN Optional
    The elements to add to the array, beginning from start.

    If you do not specify any elements, splice() will only remove elements from the array.

Return value
  An array containing the deleted elements.

  If only one element is removed, an array of one element is returned.

  If no elements are removed, an empty array is returned.

Description
  The splice() method is a mutating method. It may change the content of this. If the specified number of elements to insert differs from the number of elements being removed, the array's length will be changed as well. At the same time, it uses @@species to create a new array instance to be returned.

  If the deleted portion is sparse, the array returned by splice() is sparse as well, with those corresponding indices being empty slots.

  The splice() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

*/
